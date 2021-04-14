import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { StyledDialog } from "../../containers/StyledDialog"
import { StyledDialogContent as SDC } from '../../containers/StyledDialogContent'
import { StyledDialogTitle } from '../../containers/StyledHeader'
import SwipeableViews from 'react-swipeable-views'
import { DialogActions, FormControl, Grid, InputLabel, ListSubheader, makeStyles, MenuItem, Select, TextField, Typography, withStyles } from '@material-ui/core'
import { StyledButton } from '../../containers/StyledButton'
import "./style.css"
import Map from '../../components/Map'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../storage/actions'
import { ImagePreview } from '../../containers/ImagePreview'
import { ImapeAppend } from '../../containers/ImageAppend'
import appealAction from '../../storage/actions/appealAction'
import Api from '../../service/Api'

const DialogActionsContainer = ({
    step,
    steps,
    actions,
    actionLabels
}) => {
    return <DialogActions
        style={{
            justifyContent: (step !== 0) ? "space-between" : "center",
            marginBottom: 30,
            paddingLeft: 24,
            paddingRight: 24,
            marginBottom: 30
        }}
    >
        {step !== 0 &&
            <StyledButton
                color="default"
                variant="contained"
                onClick={actions.backStep}
                style={{ width: "250px" }}
                fullWidth
            >{actionLabels.back}</StyledButton>
        }
        <StyledButton
            color="primary"
            variant="contained"
            onClick={actions.nextStep}
            style={{ width: "250px" }}
            fullWidth
        >{step === steps ? actionLabels.final : actionLabels.next}</StyledButton>

    </DialogActions>
}

const StepContainer = ({
    title,
    subtitle,
    children
}) => {
    return <>
        <Typography
            variant="h5"
            style={{
                fontWeight: "600"
            }}
        >
            {title}
        </Typography>
        <Typography
            style={{
                marginTop: "10px",
                marginBottom: "30px",
            }}
        >
            {subtitle}
        </Typography>
        {children}
    </>
}

const StyledDialogContent = withStyles({
    paper: {
        height: 620
    }
})(SDC)

const Step1 = ({
    step,
    index,
    loc,
    setLoc
}) => {
    if (index !== step)
        return null
    return <>
        <StepContainer
            title="Выберите район"
            subtitle="Геолокация определяется автоматически, но Вы можете вручную указать нужный район просто переместив точку на карте."
        >
            <div
                style={{
                    height: "230px",
                    backgroundColor: "gray",
                    borderRadius: "20px"
                }}
            >
                <Map
                    setLoc={setLoc}
                    center={loc}
                    styles={{
                        height: "230px",
                        borderRadius: "20px"
                    }}
                />
            </div>
        </StepContainer>
    </>
}
const Step2 = ({
    step,
    index,
    imgs,
    setImgs
}) => {
    const inputRef = useRef()


    const pushFile = f => setImgs(p => p.concat(f))

    const readFile = (file) => {
        if (file.type === "application/pdf" || file.type === "image/jpeg" || file.type === "image/png") {
            var fr = new FileReader();

            fr.onload = () => {
                pushFile(fr.result);
            }
            fr.onabort = () => console.log('aborted')
            fr.onerror = () => console.log("error")
            fr.readAsDataURL(file)
        }
    }

    if (index !== step)
        return null
    return <>
        <StepContainer
            title="Загрузите фотографии"
            subtitle="Максимально можно загрузить 5 фотографий. Если у фотографий нет, то просто пропустите этот шаг."
        >
            <Grid
                onDragEnter={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
                onDragOver={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
                onDragLeave={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
                onDrop={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    let dt = e.dataTransfer
                    let file = dt.files[0]
                    readFile(file);
                }}
                container
                style={{ gap: 10, position: "relative", transition: "all 400ms ease" }}
            >
                {imgs.map((img, i) =>
                    <Grid item key={i}>
                        <ImagePreview
                            src={img}
                            alt={i}
                        />
                    </Grid>
                )}
                <Grid item>
                    <ImapeAppend
                        onClick={() => inputRef.current.click()}
                    />
                </Grid>
            </Grid>
            <input
                type="file"
                hidden
                ref={inputRef}
                multiple
                onChange={(e) => {
                    e.preventDefault()
                    e.stopPropagation()

                    const files = e.target.files;
                    Object.keys(files).forEach(index => {
                        readFile(files[index]);
                    })
                }}
            />
        </StepContainer>
    </>
}

const StyledLabel = withStyles({
    root: {
        backgroundColor: "white"
    }
})(InputLabel)


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const Step3 = ({
    step,
    index,
    setCategory,
    category
}) => {

    const __dispatch = useDispatch()
    const dispatch = useCallback(__dispatch, [])
    const categories = useSelector(state => state.category.list)

    const classes = useStyles()

    useEffect(() => {
        dispatch(actions.category.request())
    }, [])

    if (index !== step)
        return null
    return <>
        <StepContainer
            title="Выберите категорию"
            subtitle="Выберите категорию государственных органов которым вы хотите отправить обращение. Если вы не знаете к какой категории относится обращение то поставте галочку под списком и сервис автоматически определит обращение к нужной категории."
        >
            <FormControl
                className={classes.formControl}
                style={{ width: "90%" }}
            >
                <StyledLabel
                    variant="outlined"
                    htmlFor="grouped-select"
                >Название органа или категории</StyledLabel>
                <Select
                    id="grouped-select"
                    variant="outlined"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    {categories.map(cat =>
                        cat.children?.map(e =>
                            <MenuItem
                                key={e.id}
                                value={e.id}
                            >
                                {e.name}
                            </MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
        </StepContainer>
    </>
}
const Step4 = ({
    step,
    index,
    setFullName,
    setCity,
    setAddress,
    fullName,
    city,
    address
}) => {
    if (index !== step)
        return null
    return <>
        <StepContainer
            title="Введите данные"
            subtitle="Тут cтоит уточнить зачем нужны данные от человека, чтобы не боялись оставлять и не бросали заполнение заявки на этом шаге."
        >
            <div className="login_container">
                <TextField
                    label="Фамилия Имя Отчество"
                    variant="outlined"
                    fullWidth
                    onChange={e => setFullName(e.target.value)}
                    value={fullName}
                />
            </div>
            <div className="login_container">
                <TextField
                    label="Город или Область"
                    variant="outlined"
                    fullWidth
                    onChange={e => setCity(e.target.value)}
                    value={city}
                />
            </div>
            <div className="login_container">
                <TextField
                    label="Адрес"
                    variant="outlined"
                    fullWidth
                    onChange={e => setAddress(e.target.value)}
                    value={address}
                />
            </div>
        </StepContainer>
    </>
}

const Step5 = ({
    comment,
    setComment,
    step,
    index,
}) => {
    const width = window.innerWidth

    if (index !== step)
        return null
    return <StepContainer
        title="Напишите ваш комментарий"
        subtitle="Тут стоит уточнить зачем нужно писать его и выбрать другое название"
        actionLabels={{
            next: width < 800 ? "Отправить" : "Подать обращение"
        }}
    >
        <TextField
            value={comment}
            onChange={e => setComment(e.target.value)}
            multiline
            placeholder="..."
            fullWidth
            variant="outlined"
        />
    </StepContainer>
}

export const CreateAppealPage = () => {
    const history = useHistory()
    const dispatch = useCallback(useDispatch(), [])
    const user = useSelector(s => s.app.user)
    const token = useSelector(s => s.app.token)
    const steps = 5

    const [loc, setLoc] = useState()
    const [category, setCategory] = useState("")
    const [fullName, setFullName] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [anonim, setAnonim] = useState(true)
    const [valid, setValid] = useState(false)
    const [comment, setComment] = useState("")

    const [imgs, setImgs] = useState([])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        }

        function getPosition(position) {
            setLoc({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }
    }, [])

    useEffect(() => {
        if (user) {
            setFullName(user.name)
            setCity(user.address.city)
            setAddress(user.address.full)
        }
    }, [user])

    const [step, setStep] = useState(0)

    const handleClose = () => history.goBack()

    const nextStep = () => setStep(p => {
        let r = p + 1
        if (r <= steps - 1) {
            return r
        }
        handleSubmit()
        return p
    })
    const backStep = () => setStep(p => {
        let r = p - 1
        if (r >= 0) {
            return r
        }
        return p
    })

    const handleSubmit = () => {
        const data = {
            category,
            fullName,
            city,
            address,
            loc,
            imgs,
            comment,
            token
        }

        // setAnonim(!token)
        // setValid(!token ? fullName && city && address : true)

        // if (!valid)
        //     alert("Авторизуйтесь или укажите свои данные на шаге 4")

        dispatch(appealAction.create(data))
        history.push('/appeals')
    }

    const width = window.innerWidth

    return (
        <StyledDialog
            open={true}
            maxWidth="sm"
            fullWidth
            fullScreen={width < 800}
            onClose={handleClose}
        >
            <StyledDialogTitle
                reverse={true}
                onClose={handleClose}
            >Подать обращение</StyledDialogTitle>
            <StyledDialogContent
                style={{
                    transition: "all 300ms ease"
                }}
            >
                <Typography
                    style={{
                        fontSize: "14px",
                        color: "#BDBDBD"
                    }}
                >
                    {`Шаг ${step + 1} из ${steps}`}
                </Typography>
                <div className="appeal_step__container">
                    <SwipeableViews
                        index={step}
                    >
                        <Step1 step={step} index={0} loc={loc} setLoc={setLoc} />
                        <Step2 step={step} index={1} imgs={imgs} setImgs={setImgs} />
                        <Step3 step={step} index={2} category={category} setCategory={setCategory} />
                        <Step4
                            step={step}
                            index={3}
                            setFullName={setFullName}
                            fullName={fullName}
                            setCity={setCity}
                            city={city}
                            setAddress={setAddress}
                            address={address}
                        />
                        <Step5 step={step} index={4} setComment={setComment} comment={comment} />
                    </SwipeableViews>
                </div>
            </StyledDialogContent>
            <DialogActionsContainer
                step={step}
                steps={steps - 1}
                actions={{
                    backStep,
                    nextStep
                }}
                actionLabels={{
                    back: "Назад",
                    next: "Далее",
                    final: "Подать обращение"
                }}
            />
        </StyledDialog>
    )
}

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
import ideaAction from '../../storage/actions/ideaActions'
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

const Step1 = ({
    step,
    index,
    content,
    setContent,
    title,
    setTitle
}) => {

    if (index !== step)
        return null

    return <StepContainer
        title="Опишите свою идею"
    >
        <div className="login_container">
            <TextField
                label="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
            />
        </div>
        <div className="login_container">
            <TextField
                label="Описание"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                multiline
            />
        </div>
    </StepContainer>
}

const Step2 = ({
    step,
    index,
    imgs,
    setImgs,
    photoes,
    setPhotoes
}) => {
    const inputRef = useRef()

    const pushFile = f => setImgs(p => p.concat(f))
    const pushLink = l => setPhotoes(p => p.concat(l))

    const readFile = (file) => {
        if (imgs.length > 5)
            return

        if (file.type === "image/jpeg" || file.type === "image/png") {
            var fr = new FileReader();

            fr.onload = () => {
                pushFile(fr.result);
            }
            fr.onabort = () => console.log('aborted')
            fr.onerror = () => console.log("error")
            fr.readAsDataURL(file)
        }
        var fd = new FormData()
        fd.append("var_file", file)
        Api.Photo.create(fd)
            .then(res => {
                pushLink(res.url)
            })
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

export const CreateIdeaPage = () => {
    const history = useHistory()
    const dispatch = useCallback(useDispatch(), [])
    const user = useSelector(s => s.app.user)
    const token = useSelector(s => s.app.token)
    const steps = 2

    const [step, setStep] = useState(0)

    const [loc, setLoc] = useState()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [imgs, setImgs] = useState([])
    const [photoes, setPhotoes] = useState([])

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



    const handleClose = () => history.goBack()

    const nextStep = () =>
        setStep(p => {
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
            title,
            text: content,
            photoes,
            token
        }

        // setAnonim(!token)
        // setValid(!token ? fullName && city && address : true)

        // if (!valid)
        //     alert("Авторизуйтесь или укажите свои данные на шаге 4")

        dispatch(ideaAction.create(data))
        // history.push('/ideas')
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
                        <Step1
                            step={0}
                            index={step}
                            content={content}
                            setContent={setContent}
                            title={title}
                            setTitle={setTitle}
                        />
                        <Step2
                            step={1}
                            index={step}
                            imgs={imgs}
                            setImgs={setImgs}
                            photoes={photoes}
                            setPhotoes={setPhotoes}
                        />
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
                    final: "Подать идею"
                }}
            />
        </StyledDialog>
    )
}

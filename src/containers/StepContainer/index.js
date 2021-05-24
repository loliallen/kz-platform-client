import { Typography } from "@material-ui/core"

export const StepContainer = ({
    title,
    subtitle,
    children
}) => {
    return <>
        <Typography
            variant="h4"
            style={{
                fontWeight: "700"
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

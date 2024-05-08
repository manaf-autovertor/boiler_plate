import { Box } from "@mui/material";

export interface IAuthLayoutParam {
    children: JSX.Element;
}

export const AuthLayout = ({ children }: IAuthLayoutParam) => {
    return (
        <Box
            sx={{
                width: "100vw",
                height: { xs: "fit-content", md: "100vh" },
                minHeight: { xs: "100vh", md: "unset" },
                bgcolor: "white",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "space-between", md: "unset" },
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "40%", lg: "45%" },
                    height: { xs: "unset", md: "100%" },
                    minHeight: { xs: "25vh", md: "unset" },
                    bgcolor: (theme) => theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    order: { xs: 2, md: 1 },
                }}
            >
                <Box
                    component={"img"}
                    draggable={false}
                    // src={WhiteLogo}
                    sx={{ width: "45%", p: 2 }}
                />
            </Box>
            <Box
                sx={{
                    width: { xs: "100%", md: "60%", lg: "55%" },
                    height: { xs: "unset", md: "100%" },
                    minHeight: { xs: "75vh", md: "unset" },
                    bgcolor: "transparent",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    order: { xs: 1, md: 2 },
                    py: 2,
                }}
            >
                {children}
            </Box>
        </Box>
    );
};
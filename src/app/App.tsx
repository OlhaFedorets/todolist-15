import "./App.css"
import { selectThemeMode } from "@/app/app-slice"
import { Main } from "@/app/Main"
import { Header } from "@/common/components/Header/Header"
import { useAppSelector } from "@/common/hooks"
import { getTheme } from "@/common/theme"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { ErrorSnackbars } from "@/common/components/ErrorSnackbar/ErrorSnackbar.tsx"

export const App = () => {
  const themeMode = useAppSelector(selectThemeMode)

  const theme = getTheme(themeMode)

  return (
    <ThemeProvider theme={theme}>
      <div className={"app"}>
        <CssBaseline />
        <Header />
        <Main />
        <ErrorSnackbars/>
      </div>
    </ThemeProvider>
  )
}

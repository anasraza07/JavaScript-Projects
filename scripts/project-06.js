import { renderNavbar } from "./navbar.js";
renderNavbar();

document.body.addEventListener("keydown", (e) => {
  document.querySelector(".table").innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${e.key === " " ? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code === "Space" ? "SpaceBar" : e.code}</td>
            </tr>
        </tbody>
    </table>
`;
});

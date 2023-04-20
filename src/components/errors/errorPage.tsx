import {NavLink} from "react-router-dom";
import {Result} from "antd";

export const ErrorPage = () =>
    (
        <Result
            status={"warning"}
            title={"Sorry, an unexpected error has occurred."}
            extra={
                <NavLink to={"/recipes"}>
                    Regresar a inicio
                </NavLink>
            }
        />
    )
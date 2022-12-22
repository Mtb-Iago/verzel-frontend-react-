export type Item = {
    id: number;
    name: string;
    price: number;
    brand: string;
    model: string;
    photo: string;
}

export type ActiveMenu = {
    $is_active_route: boolean
}

export type ActiveFilter = {
    $is_active_filter: boolean
}
export type ThemeStyles = {
    colors: {
        navLinks: String,
        backgroundBody: String,
        accent: String,
        backgroundBlueLigth: String,
        fontFamily: String
    }
}
export type ListVehicles = [{
    id: String,
    name: String,
    photo: string,
    brand: String,
    price: String,
    model: String,
    year: String
}]

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
  };
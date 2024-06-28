import { FlightsPage } from "./pages/flights/flights.page";
import { HomePage } from "./pages/home/home.page";
import { LoginPages } from "./pages/login/login.page";
import { RegisterPages} from "./pages/register/register.page";


export const routes = {
    public: [
        {path: '/login',page: LoginPages},
        {path: '/register',page: RegisterPages},
    ],
    private: [
        {path: '/dashboard', page: HomePage},
        {path: '/dashboard/flights', page: FlightsPage},
    ]
};
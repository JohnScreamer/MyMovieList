import { Route, Routes } from "react-router-dom";
import HomeHeader from "../../components/HomePageComponents/HomeHeader/HomeHeader";
import PersonID from "../../components/PersonComponents/PersonID/PersonID";
import PopularPerson from "../../components/PersonComponents/Popular/Popular";

const PersonsPage = () => {
    return (
        <div>
            <HomeHeader />
            <Routes>
                <Route path="/" element={<PopularPerson />} />
                <Route path="/id/:id" element={<PersonID />} />
            </Routes>
        </div>
    );
};

export default PersonsPage;

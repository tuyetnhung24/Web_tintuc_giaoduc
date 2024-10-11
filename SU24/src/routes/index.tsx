
import Layouttintuc from '@/pages/Layout/LayOuttintuc';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Routers= () => {
    return (
        <Routes>
        <Route path="/" element={<Layouttintuc />} >
            
            </Route>
    </Routes>
    );
};

export default Routers;
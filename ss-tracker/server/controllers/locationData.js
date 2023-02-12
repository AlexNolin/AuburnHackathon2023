import Locations from '../models/locations.js';

export const getLocationData = (req, res) => {
    const getObj = Locations.find((err, val) => {
        console.log(val)
        res.status(200).json(val);
    })
}
//     try{
//         const getLatitudes = Locations.find().then(data => {
//             res.send(data)
//         });
//         console.log(getLatitudes);
//         res.status(200).json(getLatitudes);
//     }catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// }

// Locations.find( (err, val)=> {
//     console.log(val);

// });
const { createCargo, getCargo, countActiveCargo } = require('./cargo.service');

exports.createCargoShipment = async (req, res) => {
    try {
        const cargo = await createCargo(req.body);
        res.status(201).json(cargo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCargoDetails = async (req, res) => {
    try {
        const cargo = await getCargo(req.params.shipmentId);
        if (!cargo) return res.status(404).json({ message: 'Cargo not found' });
        res.status(200).json(cargo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.countActiveCargo = async (req, res) => {
    try {
        const active = await countActiveCargo();
        if (active.message) {
            return res.status(404).json(active);
        }
        res.status(200).json(active);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

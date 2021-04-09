import Cita from "./cita.js";
import Medico from "./medico.js";
import Usuario from "./usuario.js";

Usuario.hasMany(Cita, { foreignKey: "usuarioId" });
Medico.hasMany(Cita, { foreignKey: 'medicoId' });

Cita.belongsTo(Usuario);
Cita.belongsTo(Medico);

export { Usuario, Medico, Cita };
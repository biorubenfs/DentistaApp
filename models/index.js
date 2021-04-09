import Cita from "./cita.js";
import Medico from "./medico.js";
import Usuario from "./usuario.js";


Usuario.hasMany(Cita, { foreignKey: "usuarioId" });
Cita.hasOne(Usuario);

Medico.hasMany(Cita, { foreignKey: 'medicoId' });
Cita.hasOne(Medico);

export { Usuario, Medico, Cita };
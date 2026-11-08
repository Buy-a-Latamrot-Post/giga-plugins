// Reemplaza los ejemplos por tus plugins reales.
// downloadUrl debe apuntar al archivo .jar o a una página de descarga confiable.
export const categories = [
  "Todos",
  "Administración",
  "Economía",
  "Gameplay",
  "PvP y combate",
  "Utilidades"
];

export const plugins = [
  {
    id: "gperms",
    name: "GPerms",
    category: "Administración",
    version: "1.0.0",
    minecraft: "1.21.x",
    status: "En desarrollo",
    description: "Gestión de permisos para servidores Minecraft, diseñada para ser sencilla, flexible y extensible.",
    tags: ["Permisos", "Administración", "PlaceholderAPI"],
    downloadUrl: "",
    icon: "GP"
  },
  {
    id: "gclans",
    name: "GClans",
    category: "Gameplay",
    version: "1.0.0",
    minecraft: "1.21.x",
    status: "Próximamente",
    description: "Sistema de clanes con rangos, miembros, invitaciones y herramientas para crear comunidades.",
    tags: ["Clanes", "Social", "Equipos"],
    downloadUrl: "",
    icon: "GC"
  },
  {
    id: "gvaults",
    name: "GVaults",
    category: "Utilidades",
    version: "1.0.0",
    minecraft: "1.21.x",
    status: "En desarrollo",
    description: "Bóvedas virtuales para que los jugadores puedan organizar y guardar sus objetos.",
    tags: ["Bóvedas", "Inventario", "Almacenamiento"],
    downloadUrl: "",
    icon: "GV"
  }
];
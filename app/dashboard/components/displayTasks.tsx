import type { TaskParams } from "~/types";
import { TaskItem } from "./taskItem";

export const tasks: TaskParams[] = [
  {
    id: "1",
    title: "Développer la page d’accueil",
    description: "Créer et intégrer la page d’accueil avec React et TailwindCSS.",
    status: "En attente",
  },
  {
    id: "2",
    title: "Mettre en place l’authentification",
    description: "Implémenter l’inscription et la connexion avec JWT.",
    status: "En cours",
  },
  {
    id: "3",
    title: "Concevoir la base de données",
    description: "Modéliser la base avec Prisma et PostgresSQL.",
    status: "Terminé",
  },
  {
    id: "4",
    title: "Déployer l’application",
    description: "Déployer le backend sur Render et le frontend sur Vercel.",
    status: "En attente",
  },
  {
    id: "5",
    title: "Déployer l’application",
    description: "Déployer le backend sur Render et le frontend sur Vercel.",
    status: "En attente",
  },
  {
    id: "6",
    title: "Déployer l’application",
    description: "Déployer le backend sur Render et le frontend sur Vercel.",
    status: "En attente",
  },
];

export const DisplayTask = () => {
  return (
    <div className="bg-gray-100 p-10 h-full">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <h1 className="text-xl my-10 text-center uppercase">liste des taches </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {tasks.map(({description,id,status,title}) => <TaskItem description={description} id={id} status={status} title={title} />)}
        </div>
      </div>
    </div>
  );
};

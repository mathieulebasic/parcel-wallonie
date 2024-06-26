import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChoixDuTerritoire from "../views/ChoixDuTerritoire.vue";
import ChoixDePopulation from "../views/ChoixDePopulation.vue";
import ChoixParametres from "../views/ChoixParametres.vue";
import ResultatsImpacts from "../views/ResultatsImpacts.vue";
import ResultatsRelocalisation from "../views/ResultatsRelocalisation.vue";
import ResultatsSurfaces from "../views/ResultatsSurfaces.vue";
import ResultatsEmplois from "../views/ResultatsEmplois.vue";
import ResultatsAgir from "../views/ResultatsAgir.vue";
import PageMethodologie from "../views/PageMethodologie.vue";
import PageRelocalisationSurface from "@/views/parcours-surface/PageRelocalisationSurface.vue";
import ChoixDuTerritoireSurface from "@/views/parcours-surface/ChoixDuTerritoireSurface.vue";
import ChoixTypeAlimentationSurface from "@/views/parcours-surface/ChoixTypeAlimentationSurface.vue";
import ResultatsEffetsSurface from "@/views/parcours-surface/ResultatsEffetsSurface.vue";
import ResultatsAssiettesSurface from "@/views/parcours-surface/ResultatsAssiettesSurface.vue";
import ResultatsRepartitionSurface from "@/views/parcours-surface/ResultatsRepartitionSurface.vue";
import PageChoix from "@/views/PageChoix.vue";
import PageDiagnostic from "@/views/PageDiagnostic.vue";
import ResultatsImpactsv2 from "@/views/ResultatsImpactsv2.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/1-choix-du-territoire",
    name: "territoire",
    component: ChoixDuTerritoire,
  },
  {
    path: "/2-choix-de-la-population",
    name: "choix-de-population",
    component: ChoixDePopulation,
  },
  {
    path: "/3-type-dalimentation",
    name: "choix-des-parametres",
    component: ChoixParametres,
  },
  {
    path: "/agir-pour-une-relocalisation-durable",
    name: "agir",
    component: ResultatsAgir,
  },
  {
    path: "/resultats-de-votre-relocalisation",
    name: "resultats-relocalisation",
    component: ResultatsRelocalisation,
  },
  {
    path: "/repartition-des-produits-relocalises",
    name: "repartition-produits-relocalises",
    component: ResultatsSurfaces,
  },
  {
    path: "/emplois-crees-par-la-relocalisation",
    name: "emplois-crees-par-la-relocalisation",
    component: ResultatsEmplois,
  },
  {
    path: "/impacts-ecologiques-de-la-relocatisation",
    name: "impacts ecolos",
    component: ResultatsImpacts,
  },
  {
    path: "/impacts",
    name: "Impacts v3",
    component: ResultatsImpactsv2,
  },
  {
    path: "/methodologie-de-calcul-de-la-relocalisation-alimentaire",
    name: "Methodologie",
    component: PageMethodologie,
  },
  {
    path: "/1-relocaliser-une-surface-disponible",
    name: "Relocalisation d'une surface disponible",
    component: PageRelocalisationSurface,
  },
  {
    path: "/2-choix-du-territoire",
    name: "Choix du Territoire pour surface",
    component: ChoixDuTerritoireSurface,
  },
  {
    path: "/2-choix-du-type-dalimentation",
    name: "Choix du type d'alimentation pour surface",
    component: ChoixTypeAlimentationSurface,
  },
  {
    path: "/resultats-de-la-relocalisation-de-surface",
    name: "Résultat de la relocalisation de Surface",
    component: ResultatsEffetsSurface,
  },
  {
    path: "/composition-des-assiettes-relocalisees",
    name: "Assiettes relocalisées",
    component: ResultatsAssiettesSurface,
  },
  {
    path: "/repartition-des-cultures-dans-la-relocalisation",
    name: "Repartition des produits relocalisés surface",
    component: ResultatsRepartitionSurface,
  },
  {
    path: "/choix-du-parcours",
    name: "Choix du Parcours",
    component: PageChoix,
  },
  {
    path: "/diagnostic",
    name: "diagnostic",
    component: PageDiagnostic,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

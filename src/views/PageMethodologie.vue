<template>
  <MenuSimple></MenuSimple>
  <div class="section" id="section0">
    <div class="container mt-auto mb-auto pr-4 pl-4">
      <div class="bloc-titre text-center">
        <h1>Méthodologie de calcul</h1>
        <div class="text-center mb-5">
          <a
            href="https://bck.parcel-app.org/storage/app/uploads/public/633/407/dd3/633407dd356ea638253814.pdf"
            target="_blank"
            rel="noopener noreferrer"
            ><button type="button" class="btn btn-principal mt-5">
              Description de la méthode
            </button></a
          >
          <a
            href="../assets/pdf/Parcel-Resultats-nationaux_Octobre-2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
            ><button type="button" class="btn btn-principal mt-5">
              Mise en contexte des résultats de PARCEL
            </button></a
          >
        </div>
        <div class="ss-titre-page vert-fonce text-left">
          <p>
            PARCEL estime des ordres de grandeur mais ne prétend pas calculer
            des valeurs réelles. Il a pour objectif de fournir des estimations
            ayant un niveau de précision suffisant pour permettre des
            comparaisons, susciter des questionnements et animer des débats sur
            le thème de l’alimentation durable dans les territoires. Il est
            complémentaire de travaux d’analyse plus poussés qui visent à
            construire des scénarios prospectifs plus détaillés.
          </p>
          <p>
            Les calculs de surfaces et d’emplois reposent sur les bases de
            données publiques qui fournissent des statistiques à différentes
            échelles (nationale, régionale, départementale...), et non sur des
            extrapolations à partir de références techniques (de fermes
            agricoles, de produits consommés...).
          </p>
          <p>
            L’estimation des impacts écologiques se base sur les méta-études et
            les bases de données les plus récentes publiées au niveau wallon et
            international. Elles permettent d’évaluer les principales
            conséquences sur l’environnement liées à la conversion en bio de la
            production agricole et à la baisse de consommation de produits
            animaux.
          </p>
        </div>
      </div>

      <div class="text-center mt-5">
        <img
          alt="methodo"
          class="ml-auto mr-auto mt-5 image-demarche"
          :src="require('@/assets/img/parcours/schema-methodo2022.svg')"
          width="80%"
          height="auto"
        />
      </div>
      <div class="note">
        Figure 1 : Principe de fonctionnement de l'outil PARCEL : variables
        d'entrée et variables de sortie (Source : Basic, 2019)
      </div>

      <div class="text-h2 text-left">Les principales sources de données</div>
      <ul>
        <li>
          AGRESTE – Bilans d’approvisionnements, Statistique Agricole Annuelle,
          Recensement Agricole – Ministère de l’Agriculture et de l’Alimentation
          (moyenne des données 2014-2016)
        </li>
        <li>
          INSEE – Profils des habitants des communes wallonnes, Populations
          légales – Institut national de la statistique et des études
          économiques (données 2016)
        </li>
        <li>
          ANSES – Étude individuelle nationale des consommations alimentaires
          (INCA 3) – 2017
        </li>
        <li>
          ITAB – Sautereau, N., Benoît, M., Quantifier et chiffrer
          économiquement les externalités de l’agriculture biologique ? – 2016
        </li>
        <li>ADEME – Base de données FOODGES (données 2016)</li>
        <li>
          Seufert, V., Ramankutty, N., Many shades of gray – The
          context-dependent performance of organic agriculture – 2017
        </li>
      </ul>
      <div class="text-center mb-5">
        <a
          href="https://parcel-app.org/assets/pdf/Parcel-Resultats-nationaux_Octobre-2019.pdf"
          target="_blank"
          rel="noopener noreferrer"
          ><button type="button" class="btn btn-principal mt-5">
            Mise en contexte des résultats de PARCEL
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import MenuSimple from "@/components/Menu/MenuSimple.vue";

export default {
  name: "HomeView",
  components: {
    MenuSimple,
  },
};
</script>

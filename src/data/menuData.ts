interface MenuItem {
  name: string;
  description: string;
  price?: string;
  options?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  images: string[];
}

interface MenuImages {
  starters: string[];
  sandwiches: string[];
  salads: string[];
  meat_and_fish: string[];
}

export const menuImages: MenuImages = {
  starters: [
    "https://www.gallinablanca.es/wp-content/uploads/2006/04/15401139853c45e78482f6a489865cab8522b47b6e.jpg", // aguacate con langostinos - avocado dish with shrimp
    "https://www.daisybrand.com/wp-content/uploads/2019/12/creamy-hummus-dip2-770x628_3571.jpg", // hummus - traditional hummus with pita
    "https://i0.wp.com/bardonairecomidasadomicilio.com/wp-content/uploads/2020/09/queso-racion-media-original.jpg?fit=1400%2C1050&ssl=1", // queso idiazábal - Spanish sheep cheese
    "https://www.jamonesvallejo.com/wp-content/uploads/2021/05/Diferencias-entre-el-jamon-de-Trevelez-y-jamon-de-la-Alpujarra.jpg", // jamón de Trevélez - Spanish cured ham
    "https://www.pescadoscharo.es/wp-content/uploads/2018/05/tataki-atun.jpeg", // tataki de atún - seared tuna tataki
    "https://cdn.recipes.lidl/images/_Aliases/es-ES/recipe_detail_1264x494/336bf0d2eb14-banner-pates-veganos.jpg", // tabla de patés veganos - vegan pâté board
    "https://imag.bonviveur.com/emplatado-final-del-pure-de-verduras.jpg", // crema del día - soup of the day
  ],
  sandwiches: [
    "https://www.hola.com/horizon/landscape/54f537cc23ab-bocadillo-gourmet-salmon-compota-tomate-t.jpg", // bocadillo de salmón - salmon sandwich
    "https://img2.rtve.es/v/5170242?w=1600&preview=1556641967805.png", // bocadillo vegetal - veggie sandwich
    "https://img2.rtve.es/n/2119800", // hamburguesa vegana - vegan burger
    "https://www.carniceriademadrid.es/wp-content/uploads/2024/12/goat-cheese-and-caramelized-onion-burger-2023-11-27-05-00-17-utc-scaled.jpg", // hamburguesa ternera - beef burger
  ],
  salads: [
    "https://i.ytimg.com/vi/hh0uzCsIzDo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBroivJpcKxlpAsnZQ3taUSIlhyug", // ensalada El Higo (mixta con frutas) - mixed salad with fruits
    "https://static.bainet.es/clip/bcf91562-8212-41dd-af02-96ec65a7f91a_source-aspect-ratio_1600w_0.jpg", // espinacas y pavo - spinach and turkey salad
    "https://www.gastronomiaycia.com/wp-content/uploads/2015/11/ensalada_ahumados_frutos1p.jpg", // ensalada de ahumados - smoked fish salad
    "https://imag.bonviveur.com/ensalada-de-burrata-con-tomate-y-pesto-abierta.jpg", // caprese di buffala - caprese with buffalo mozzarella
  ],
  meat_and_fish: [
    "https://okdiario.com/img/2018/11/14/receta-de-wok-de-atun-655x368.jpg", // atún rojo - red tuna with vegetables
    "https://content-cocina.lecturas.com/medio/2024/10/15/wok-de-arroz-integral-con-verduras-y-bacalao_00000000_241030153503_1200x1200.jpg", // bacalao gratinado - gratinated cod
    "https://www.carnescarrasquilla.es/wp-content/uploads/2022/04/Entrana-de-ternera-que-es-y-como-prepararla-Carnes-Carrasquilla.jpg", // entraña de ternera - beef skirt steak
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMrSgusquJoIduP9IxCKgHds5gYsDGumINMd6__yLJ53dUlL42ehTA8dHiklUm7fEa_djlgRgUauXd4w-cxBaRB7alcFkdVwv4fDdGtiSrIVlTVBO3N_aQ_N9OvqI0f2mWUvs1SS7FlS0/s1600/DSCN2471.JPG", // carrillada de ternera - beef cheek in sauce
    "https://media-cdn.tripadvisor.com/media/photo-s/07/ea/2a/71/pavo-a-la-plancha-con.jpg", // plato infantil (pavo con papas) - children's turkey with potatoes
  ],
};

// Get all menu images as a flat array
export const getAllMenuImages = (): string[] => {
  return Object.values(menuImages).flat();
};

// Import the menu data directly from JSON
import esMenu from '../locales/es/menu.json';
import enMenu from '../locales/en/menu.json';

export const getMenuData = (t: (key: string, options?: any) => any, locale: string = 'es'): MenuCategory[] => {
  const menuData = locale === 'es' ? esMenu : enMenu;

  const getItems = (category: keyof typeof menuData.items): MenuItem[] => {
    const items = menuData.items[category];
    if (!Array.isArray(items)) return [];

    return items.map((item: any) => ({
      name: item.name,
      description: item.description,
      price: item.price,
      options: item.options,
    }));
  };

  return [
    {
      id: "starters",
      name: menuData.categories.starters,
      items: getItems("starters"),
      images: menuImages.starters,
    },
    {
      id: "sandwiches",
      name: menuData.categories.sandwiches,
      items: getItems("sandwiches"),
      images: menuImages.sandwiches,
    },
    {
      id: "salads",
      name: menuData.categories.salads,
      items: getItems("salads"),
      images: menuImages.salads,
    },
    {
      id: "meat_and_fish",
      name: menuData.categories.meat_and_fish,
      items: getItems("meat_and_fish"),
      images: menuImages.meat_and_fish,
    },
  ];
};
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-coverflow"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../styles/Solutions-swiper.css";
import modinfgerencial from "../../images/modulo_infgerev7.png";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";
import SolutionCard from "./solution-card";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const solutions = [
  { id: '1', name: 'Modulo Informacion Gerencial ', description: '.', imageUri:'https://img.freepik.com/foto-gratis/concepto-collage-control-calidad-estandar_23-2149595830.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710892800&semt=ais' },
  { id: '2', name: 'Modulo Finanzas', description: '.', imageUri: 'https://media.istockphoto.com/id/1311598658/es/foto/empresario-negocia-mercado-de-valores-en-l%C3%ADnea-en-pantalla-teblet-concepto-de-inversi%C3%B3n-digital.jpg?s=612x612&w=0&k=20&c=5sYDHhjv2qQfNnTHnytKNxe-qDlhYh8GyOt3tzEMpyU=' },
  { id: '3', name: 'Modulo Creditos - Convenios', description: '.', imageUri: 'https://img.freepik.com/foto-gratis/gente-negocios-dandose-mano-terminando-reunion_1150-37745.jpg?size=626&ext=jpg&ga=GA1.1.1319243779.1711411200&semt=sph' },
  { id: '4', name: 'Modulo Riesgos', description: '.', imageUri: 'https://img.freepik.com/foto-gratis/riesgo-apuesta-oportunidad-foda-debilidad-concepto-inseguro_53876-122989.jpg' },
  { id: '5', name: 'Modulo Planeamiento', description: '.', imageUri: 'https://media.istockphoto.com/id/1385097502/fr/photo/photo-dhommes-daffaires-se-serrant-la-main-lors-dune-r%C3%A9union-d%C3%A9quipe-dans-un-bureau.jpg?s=612x612&w=0&k=20&c=GeVW252881ZQ1O50E1nySNWoi2ilItQ8p-CyRunXaTw=' },
  { id: '6', name: 'Modulo Oficial de Cumplimiento', description: '.', imageUri: 'https://www.shutterstock.com/image-photo/compliance-rules-law-regulation-policy-600nw-1171280545.jpg' },
  { id: '7', name: 'Modulo Contabilidad - Presupuestos', description: '.', imageUri: 'https://despachocontablemexico.com.mx/wp-content/uploads/2021/11/1500x844_contabilidad_negocio.jpg.webp' },
  { id: '8', name: 'Modulo Cobranzas', description: '.', imageUri: 'https://mbsperu.com/wp-content/uploads/2022/04/finanzas.jpg'},
  { id: '9', name: 'Modulo Logistica', description: '.', imageUri: 'https://img.freepik.com/foto-gratis/representacion-cadena-suministro-vehiculos-portatiles_23-2149853161.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711411200&semt=sph' },
  { id: '10', name: 'Modulo Recursos Humanos', description: '.', imageUri: 'https://i0.wp.com/deeprh.com/wp-content/uploads/IMG_5084.jpg?fit=750%2C452&ssl=1' },
 
]


export default function SolutionsSwiper() {
  return (
    <div className="container">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        {solutions.map((solution) => (
        <SwiperSlide>
            <SolutionCard id={solution.id} name={solution.name} description={solution.description} imageUri={solution.imageUri}/>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
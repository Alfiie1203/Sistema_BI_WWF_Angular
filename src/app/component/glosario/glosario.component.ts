import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.scss']
})
export class GlosarioComponent implements OnInit {

  constructor(private router: Router) { } 
  
  pageActual: number =1;
  holaMundo = "prueba"  ;
  filterPost = '';
  table = [
    {
      "id": "a1",
      "palabra": "ACCIONES",
      "definicion": "Las actividades, procesos de mejora o prácticas que una empresa realiza para implementar sus compromisos o los de sus clientes. Las acciones pueden basarse, por ejemplo, en las mejores prácticas identificadas en el Accountability Framework u otras normas y marcos que gocen de credibilidad y/o en actividades específicas identificadas en planes de acción o planes de participación."
    },
    {
      "id": "a2",
      "palabra": "ACREDITACIÓN",
      "definicion": "La 'certificación' del organismo de certificación se llama 'acreditación', Un Organismo de acreditación es un organismo tercero que procede a la acreditación de un organismo de certificación."
    },
    {
      "id": "a3",
      "palabra": "AGROQUIMICOS",
      "definicion": "Son sustancias químicas muy utilizadas en la agricultura, cuyo objetivo principal es mantener y conservar los cultivos. Pero en el afán de cumplir con este objetivo, muchas veces se pierde de vista los efectos nocivos que estos agroquímicos pueden provocar. Ya sea que se empleen para proporcionar nutrientes químicos, para matar insectos o microorganismos, para eliminar las malezas u hongos de los cultivos."
    },
    {
      "id": "a4",
      "palabra": "ALEGACIÓN",
      "definicion": "Un mensaje utilizado para describir o promover un producto, proceso, negocio o servicio con respecto a sus atributos o credenciales de sostenibilidad. Esto puede incluir mensajes relacionados con el establecimiento, implementación, avance o cumplimiento de los compromisos de la cadena de abastecimiento."
    },
    
    {
      "id": "a5",
      "palabra": "ALIANZAS PRODUCTIVAS",
      "definicion": "Las alianzas productivas son un conjunto de relaciones y arreglos formales entre productores de bienes agropecuarios, comercializadores y agroindustriales, y organismos de apoyo, públicos o privados, cuyo propósito es expandir empresarialmente las áreas de cultivos de tardío rendimiento y actualizar tecnológicamente a las unidades productivas de pequeños productores de la alianza productiva. "
    },
    {
      "id": "a6",
      "palabra": "ALTO VALOR DE CONSERVACIÓN",
      "definicion": "Son los valores biológicos, ecológicos, sociales o culturales que se consideran excepcionalmente importante o muy importante, a nivel nacional, regional o global. Todos los hábitats naturales tienen unos valores de conservación inherentes, incluyendo la presencia de especies raras o endémicas, la prestación de servicios de los ecosistemas, los sitios sagrados, o los recursos capturados por los residentes locales. Sin embargo, algunos valores son más importantes o críticos que otros, y es el enfoque AVC, que ofrece una forma objetiva de determinar los valores que se mantiene o se aumenta. Existen 6 altos valores de conservación, que abarcan una amplia gama de prioridades de conservación compartidos por una amplia gama de grupos de interés. En cualquier plan de gestión, la gestión de bosques en plantaciones agrícolas selección y diseño o manejo de recursos hídricos sitio, son estos valores que deben ser mantenidos o mejorados.  El Alto Valor de Conservación (AVC) es una de las herramientas más importantes para la gestión responsable de la tierra y el abastecimiento responsable. También es un componente clave de los principales sistemas de normas voluntarias de sostenibilidad. "
    },
    {
      "id": "a7",
      "palabra": "AREA PROTEGIDA",
      "definicion": "Se entiende un área definida geográficamente que haya sido designada o regulada y administrada a fin de alcanzar objetivos específicos de conservación."
    },
    {
      "id": "a8",
      "palabra": "ASEGURAMIENTO",
      "definicion": "Evidencia demostrable de que se cumplen los requisitos específicos relacionados con un producto, proceso, sistema, persona u órgano."
    },
    {
      "id": "a9",
      "palabra": "AUDITORÍA / AUDITAR",
      "definicion": "Proceso sistemático y documentado para obtener registros, declaraciones de hechos u otra información relevante y evaluarlos objetivamente para determinar hasta qué punto se cumplen los requisitos especificados."
    },
    {
      "id": "a10",
      "palabra": "MONITOREO DEL AVANCE",
      "definicion": "Avance hacia el cumplimiento de los compromisos ambientales y sociales. “Avance” es un término general que puede referirse a acciones y/o mejoras en el desempeño que demuestran, o sirven como indicadores fiables de un cambio positivo hacia el cumplimiento de los compromisos."
    },
    {
      "id": "a11",
      "palabra": "BAJO RIESGO",
      "definicion": "La conclusión, tras la evaluación del riesgo, de que hay riesgo insignificante o desdeñable de que el material obtenido de una fuente dada no cumple uno o más aspectos de los compromisos u obligaciones sociales y ambientales de una empresa. Bajo riesgo se define según el contexto y el tema del riesgo (por ejemplo, el aspecto de compromisos u obligaciones de una empresa). Una región productora puede ser considerada de bajo riesgo por un aspecto del compromiso de la empresa, pero de mayor riesgo por otros aspectos. "
    },
    {
      "id": "a12",
      "palabra": "BASE DE SUMINISTRO / ABASTECIMIENTO",
      "definicion": "El origen de la producción de los materiales en las cadenas de abastecimiento. La base del suministro (o el abastecimiento) incluye: (i) unidades de producción; (ii) instalaciones de procesamiento primario y sus áreas geográficas de suministro relacionadas; y (iii) grupos de unidades de producción e instalaciones de procesamiento primario ubicadas en una gran cercanía geográfica y con administración común o coordinada."
    },
    {
      "id": "a13",
      "palabra": "BENEFICIOS JUSTOS",
      "definicion": "Bienes y servicios suministrados a empleados sin costo, o a un costo significativamente reducido que son clara y principalmente de beneficio para el empleado. Incluyen cosas como atención a la salud, seguridad social (incluyendo facilitación adecuada para la participación del empleado en los sistemas del gobierno), sistemas voluntarios de ahorro, alimentos, bebidas, combustible para el transporte, otros pagos en especie, y el costo, aparte del costo del capital, de vivienda para los trabajadores cubiertos por los empleadores. Estos beneficios no se deben considerar reemplazo de los sueldos normales. "
    },
    {
      "id": "a14",
      "palabra": "BOSQUE",
      "definicion": "Terrenos que tengan más de 0.5 hectáreas, con árboles de más de 5 metros de altura y una cobertura de copas de más del 10 por ciento, o árboles capaces de lograr estos umbrales en el sitio. No incluye terrenos a los que se da uso agrícola u otros usos. Bosques incluye bosques naturales y plantaciones de árboles. Con el objeto de implementar los compromisos de no deforestación de parte de la cadena de abastecimiento, el enfoque se coloca en prevenir la conversión de los bosques naturales."
    },
    {
      "id": "a15",
      "palabra": "CAPACITAR",
      "definicion": "Mejora de las competencias para desarrollar una o varias tareas específicas. Capacitación, o desarrollo de personal, es toda actividad realizada en una organización, respondiendo a sus necesidades, que busca mejorar la actitud, conocimiento, habilidades o conductas de su personal. Concretamente, la capacitación: busca perfeccionar al colaborador en su puesto de trabajo, en función de las necesidades de la empresa, en un proceso estructurado con metas bien definidas. "
    },
    {
      "id": "a16",
      "palabra": "COMERCIANTE",
      "definicion": "Un negocio que compra y vende materias primas agrícolas o forestales, o con procesamiento primario. Los comerciantes también generalmente proporcionan servicios de transporte para estos bienes. Las empresas comerciantes pueden también participar en el procesamiento primario o secundario."
    },
    {
      "id": "a17",
      "palabra": "COMPENSACIÓN (EN RELACIÓN CON DAÑOS AMBIENTALES)",
      "definicion": "Las acciones realizadas y/o los fondos de los que se dispone para reparar o contrarrestar la deforestación, la conversión, la degradación u otros daños a los ecosistemas y sus valores de conservación con beneficios ambientales y/o sociales en los sitios que no son aquellos donde ocurrieron los daños.  y El término “compensación” también se emplea en el contexto de la reparación de daños a los derechos humanos, para lo que la compensación puede darse de muchas formas. Consulte la Guía Operativa sobre Reparación y Acceso a Recursos. "
    },
    {
      "id": "a18",
      "palabra": "COMPRADOR",
      "definicion": "Una empresa que adquiere materias primas, materiales procesados o productos terminados de un proveedor.  y Los compradores pueden incluir procesadores (por ej. molinos o rastros), comerciantes, fabricantes, y minoristas. Por ejemplo, los comerciantes compran materias primas o procesadas de fincas o plantas procesadoras, mientras que los minoristas compran productos de consumo de los fabricantes.  y Una empresa puede ser tanto proveedora como compradora."
    },
    {
      "id": "a19",
      "palabra": "COMPROMISO",
      "definicion": "Una declaración pública de una empresa que especifica las acciones que tiene la intención de tomar, o las metas, los criterios u objetivos que tiene la intención de cumplir con respecto a su gestión o desempeño en los temas ambiental, social y/o de gobernanza.  Los compromisos también se pueden llamar o conocerse como políticas, promesas o con otros términos. "
    },
    {
      "id": "a20",
      "palabra": "COMUNIDAD LOCAL",
      "definicion": "Un grupo de personas que interactúa, que vive y comparte un entorno y lugar específicos, y comparte el cuidado de las instalaciones, servicios y entorno locales, y que en ocasiones pueden ser diferentes a las definiciones tradicionales o del Estado. Dichas comunidades podrían dar particular significado a la tierra y los recursos naturales, y a las fuentes de cultura, costumbres, historia e identidad, y/o depender de ellos para sostener sus medios de vida, organización social, cultura, tradiciones y creencias. Las comunidades locales pueden conocerse legalmente o por costumbre o designarse con el uso de diversos términos, como “comunidades tradicionales”. Al igual que los pueblos indígenas, pueden usar y manejar la tierra en conformidad con sistemas consuetudinarios de tenencia de la tierra y derechos relacionados, y pueden depender de su tierra para su sobrevivencia cultural y física. Debido a las similitudes, el Marco se refiere a ambos como “pueblos indígenas y comunidades locales” y exige los mismos procesos y respeto para los derechos de ambos grupos, incluso con referencia a la propiedad y el derecho de dar o retener el Consentimiento Libre, Previo e Informado (CLPI; consulte la definición)."
    },
    {
      "id": "a21",
      "palabra": "CONSENTIMIENTO LIBRE, PREVIO E INFORMADO (CLPI)",
      "definicion": "Un derecho humano colectivo de los pueblos indígenas y las comunidades locales para dar y retener su consentimiento antes del inicio de cualquier actividad que pudiera afectar sus derechos, tierra, recursos, territorios, medios de vida y seguridad alimentaria. Es un derecho ejercido por medio de representantes de su elección y de forma congruente con sus costumbres, valores y normas."
    },
    {
      "id": "a22",
      "palabra": "CONTAMINANTES",
      "definicion": "Son fenómenos físicos, o sustancias, o elementos en estado sólido, líquido o gaseoso, causantes de efectos adversos en el medio ambiente, los recursos naturales renovables y la salud humana que solos, o en combinación, o como productos de reacción, se emiten al aire como resultado de actividades humanas, de causas naturales, o de una combinación de éstas."
    },
    {
      "id": "a23",
      "palabra": "CONVERSIÓN",
      "definicion": "Cambio de un ecosistema natural a otro uso de tierra o un cambio profundo en la composición, estructura o función de las especies de un ecosistema.  La deforestación es una forma de conversión (conversión de los bosques naturales).  La conversión incluye la degradación severa o introducción de prácticas de gestión que producen un cambio sustancial y sostenido en la composición, estructura o función de las especies anteriores del ecosistema.  Los cambios en los ecosistemas naturales que se ajustan a esta definición se consideran conversión independientemente de si es lícito o no. "
    },
    {
      "id": "a24",
      "palabra": "CUMPLIMIENTO / CONTROL DE CUMPLIMIENTO",
      "definicion": "El estado de cumplimiento o de observación de una ley, norma, compromiso u objetivo. La evaluación del cumplimiento es binaria.  y El cumplimiento puede evaluarse al nivel de producción o unidad(es) primarias de procesamiento (por ejemplo, las fincas, los grupos de agricultores, o las plantas), cadenas de abastecimiento, o el compromiso de toda una empresa. "
    },
    {
      "id": "a25",
      "palabra": "DEBIDA DILIGENCIA",
      "definicion": "Debido cuidado profesional: la aplicación de diligencia y juicio al auditar Los auditores deberían proceder con el debido cuidado, de acuerdo con la importancia de la tarea que desempeñan y la confianza depositada en ellos por el cliente de la auditoría y por otras partes interesadas. Un factor importante en el desempeño de su trabajo con el debido cuidado profesional es tener la habilidad de hacer juicios razonables en toda situación de auditoría.12 Impone a cada persona de la organización del auditor, la responsabilidad del cumplimiento de las normas en la ejecución del trabajo y en la emisión del informe. Su ejercicio exige, así mismo, una revisión crítica a cada nivel de supervisión del trabajo efectuado y del juicio emitido por todos y cada uno de los profesionales del equipo de trabajo de auditoría.13 Se refiere al actuar con suficiente cuidado, evitando la negligencia y comportándose de la forma más eficiente. "
    },
    {
      "id": "a26",
      "palabra": "DEFENSORES DEL MEDIO AMBIENTE Y DE LOS DERECHOS HUMANOS",
      "definicion": "Personas individuales o grupos que, en su calidad personal o profesional y de manera pacífica, actúan para proteger y promover los derechos humanos, eliminar las violaciones de los derechos humanos o proteger el medio ambiente, incluidos el agua, el aire, la tierra, la flora y la fauna."
    },
    {
      "id": "a27",
      "palabra": "DEFORESTACIÓN",
      "definicion": "La pérdida de bosque natural como resultado de: i) la conversión a agricultura u otro uso de tierra no forestal; ii) la conversión a una plantación de árboles; o iii) su degradación seria y sostenida. Esta definición se refiere a los compromisos de no deforestación de la cadena de abastecimiento, que generalmente se enfoca en prevenir la conversión de los bosques naturales. Una seria degradación (la situación iii en la definición) constituye deforestación aún si a la tierra no se le da posteriormente un uso no forestal. La pérdida del bosque natural que cumple con esta definición se considera deforestación independiente de si es o no lícita  La definición del Accountability Framewok de deforestación significa “gran deforestación” del bosque natural, y “gran” se emplea en el sentido de “total; agregada; sin deducción por reforestación u otras formas para compensarla.” "
    },
    {
      "id": "a28",
      "palabra": "DEFENSORES DEL MEDIO AMBIENTE Y DE LOS DERECHOS HUMANOS",
      "definicion": "Personas individuales o grupos que, en su calidad personal o profesional y de manera pacífica, actúan para proteger y promover los derechos humanos, eliminar las violaciones de los derechos humanos o proteger el medio ambiente, incluidos el agua, el aire, la tierra, la flora y la fauna."
    },
    {
      "id": "a29",
      "palabra": "DEGRADACIÓN",
      "definicion": "Los cambios dentro de un ecosistema natural que afectan de manera significativa y negativa su composición, estructura y/o función como especie, y reducen la capacidad del ecosistema de suministrar productos, dar apoyo a la biodiversidad, y/o entregar servicios a los ecosistemas. La degradación puede considerarse conversión si:  a)	Es de gran escala y progresiva o duradera;  b)	 Altera la composición, estructura y función del ecosistema al grado en que la regeneración a un estado anterior es poco probable; o  c) Da lugar a un cambio en el uso de la tierra (por ej. a agricultura u otro uso que no sea de bosque u otro ecosistema natural). "
    },
    {
      "id": "a30",
      "palabra": "DERECHOS CONSUETUDINARIOS",
      "definicion": "Los derechos que surgen de una conducta o acto que se repite con el tiempo, con la creencia de que es obligatorio y, debido a la repetición y aceptación, adquieren fuerza de ley dentro de una geografía o sociedad (también se conocen como “derecho común”). "
    },
    {
      "id": "a31",
      "palabra": "DERECHOS CONSUETUDINARIOS A LA TIERRA, LOS RECURSOS Y EL TERRITORIO",
      "definicion": "Patrones de largo plazo de uso de la tierra y los recursos de conformidad con las leyes, valores, costumbres y tradiciones de los pueblos indígenas y las comunidades locales. Dichos derechos son aplicables a las tierras, recursos, y territorios de los que los pueblos indígenas y las comunidades locales han sido tradicionalmente los propietarios, o han ocupado o que han empleado de otras maneras. No son aplicables a las tierras, territorios, y recursos que estos grupos han adquirido de otras maneras, como por medio de su adquisición o como parte de un paquete compensatorio.  Estos derechos son un derecho humano colectivo de los pueblos indígenas y las comunidades locales que existen ya sea que se les haya entregado o no un título del Estado. "
    },
    {
      "id": "a32",
      "palabra": "DESEMPEÑO / CONTROL DEL DESEMPEÑO",
      "definicion": "Medidas cuantitativas o cualitativas de condiciones sociales y ambientales o resultados relacionados con la meta u objetivo declarados (por ej. el compromiso de una empresa)."
    },
    {
      "id": "a33",
      "palabra": "DISCRIMINACIÓN",
      "definicion": "Cualquier distinción, exclusión o preferencia hecha en base a raza, color, sexo, religión, opinión política, ascendencia nacional u origen social (entre otras características), que tenga el efecto de anular o menoscabar la igualdad de oportunidades y trato en el empleo u ocupación.  "
    },
    {
      "id": "a34",
      "palabra": "DIVULGACIÓN",
      "definicion": "Intercambio público de información por parte de las empresas. Esto puede incluir reportes disponibles al público, así como el intercambio público y gratuito de otra información, como políticas y compromisos de la empresa; estructuras de negocio de la empresa, filiales y participaciones financieras; listas de proveedores; conflictos de interés; o acción política (cabildeo, aportaciones a campañas, etc.). La divulgación es un mecanismo de transparencia."
    },
    {
      "id": "a35",
      "palabra": "DÓSIS LETAL 50 (DL 50)",
      "definicion": "Estimación estadística de la dosis mínima necesaria para matar el 50% de una población de animales de laboratorio bajo condiciones controladas. Se expresa en miligramos de tóxico por kilogramo de peso animal, con indicación de la especie, sexo y edad de los animales usados en la experimentación. Se aplica por vías oral, dérmica, mucosas y parenteral. "
    },
    {
      "id": "a36",
      "palabra": "ECOSISTEMA NATURAL",
      "definicion": "Un Ecosistema es un conjunto formado por un espacio determinado y todos los seres vivos que lo habitan. Por ello podemos decir que están formados por el medio físico y los seres vivos que en él se encuentran. Los ecosistemas se pueden clasificar en terrestres (bosques, praderas o desiertos) o acuáticos (de agua dulce o de agua salada). Los ecosistemas pueden ser de diversos tamaños, desde una charca a todo un océano, de hecho, podemos considerar a La Tierra y todos los seres vivos que en ella habitan como un gran ecosistema."
    },
    {
      "id": "a37",
      "palabra": "EMPLEOS TEMPORALES",
      "definicion": "Se entiende por empleos temporales los creados en las plantas de cargos para el ejercicio de las funciones previstas en el artículo 21 de la Ley 909 de 2004, por el tiempo determinado en el estudio técnico y en el acto de nombramiento. Los empleos temporales deberán sujetarse a la nomenclatura y clasificación de cargos vigentes para cada entidad y a las disposiciones relacionadas con la elaboración del plan de empleos, diseño y reforma de plantas de que trata la Ley 909 de 2004. En la respectiva planta se deberán identificar los empleos que tengan la naturaleza de temporales. El estudio técnico deberá contar con el concepto previo favorable del Departamento Administrativo de la Función Pública."
    },
    {
      "id": "a38",
      "palabra": "EMPRESA",
      "definicion": "Una empresa u otra entidad organizativa o jurídica que participa en la producción, provisión, comercio, o venta de bienes y servicios (incluidos servicios financieros). Esta definición incluye todas las estructuras de propiedad de las empresas, incluidas empresas privadas, accionarias y estatales, así como empresas en las que los estados tienen participación. Para los objetivos del Accountability Framework, una empresa se define como inclusiva del grupo empresarial (consulte la definición) de la que forma parte. Esto incluye las subsidiarias, filiales, empresas conjuntas y participaciones mayoritarias de la empresa. "
    },
    {
      "id": "a39",
      "palabra": "EMPRESA PRODUCTORA",
      "definicion": "Una empresa que compra directamente de los productores (como los comerciantes y los rastros). "
    },
    {
      "id": "a40",
      "palabra": "EMPRESA TRANSFORMADORA",
      "definicion": "Una empresa que hace poco o ninguna compra directa de los productores (como los fabricantes y minoristas)."
    },
    {
      "id": "a41",
      "palabra": "ESTUDIO DE IMPACTO AMBIENTAL",
      "definicion": "Se entiende por Estudio de Impacto Ambiental el conjunto de la información que deberá presentar ante la autoridad ambiental competente el peticionario de una Licencia Ambiental, Decreto Nacional 1753 de 1994. Reglamentado en el. El Estudio de Impacto Ambiental contendrá información sobre la localización del proyecto y los elementos abióticos, bióticos y socioeconómicos del medio que puedan sufrir deterioro por la respectiva obra o actividad, para cuya ejecución se pide la licencia, y la evaluación de los impactos que puedan producirse. Además, incluirá el diseño de los planes de prevención, mitigación, corrección y compensación de impactos y el plan de manejo ambiental de la obra o actividad. La autoridad ambiental competente, para otorgar la licencia ambiental, fijará los términos de referencia de los estudios de impacto ambiental en un término que no podrá exceder de treinta (30) días hábiles contados a partir de la solicitud por parte del interesado"
    },
    {
      "id": "a42",
      "palabra": "EVALUACIÓN DE BRECHAS",
      "definicion": "Una evaluación del desempeño real comparado con el desempeño deseado (por ejemplo, según lo definido por los compromisos, obligaciones y objetivos de la compañía), que resulta en la identificación de las brechas que deben llenarse para lograr el desempeño deseado. Las evaluaciones de brechas informan los planes de acción desarrollados para lograr el pleno cumplimiento. Las evaluaciones de brechas a veces se denominan evaluaciones de referencia o evaluaciones de necesidades.  "
    },
    {
      "id": "a43",
      "palabra": "EVALUACIÓN DEL RIESGO",
      "definicion": "Un proceso sistemático para evaluar los posibles riesgos en las operaciones actuales o futuras de una empresa, en las cadenas de abastecimiento y en las inversiones. En el contexto del Accountability Framework, este término se refiere a la evaluación del riesgo de incumplimiento de los compromisos de la compañía o la legislación aplicable relacionada con el alcance del Accountability Framework, así como los efectos adversos a los derechos humanos reconocidos internacionalmente. Esto es diferente del uso del término en un contexto comercial general, donde se refiere a la evaluación de los riesgos financieros y los factores que impulsan dichos riesgos (por ejemplo, riesgo jurídico, riesgo crediticio, riesgo de reputación y otros). El riesgo de impactos sociales y ambientales adversos, incluido el incumplimiento de los compromisos de la empresa, puede ser un elemento importante de un riesgo comercial más amplio."
    },
    {
      "id": "a44",
      "palabra": "EXCLUSIÓN",
      "definicion": "La acción de un comprador para poner fin a una relación de compra con un proveedor (en el caso de una relación anterior o en curso) o para evitar comprar a un proveedor determinado (en el caso de mercados al contado o la falta de una relación de compra en curso)."
    },
    {
      "id": "a45",
      "palabra": "FABRICANTE",
      "definicion": "Una empresa que manufactura productos de consumo a partir de materias primas o procesadas agrícolas o forestales. "
    },
    {
      "id": "a46",
      "palabra": "FECHA LÍMITE",
      "definicion": "La fecha después de la cual la deforestación o conversión convierte al área o unidad de producción en infractora de los compromisos de no deforestación o no conversión, respectivamente. "
    },
    {
      "id": "a47",
      "palabra": "FECHA PREVISTA",
      "definicion": "La fecha en que una empresa determinada (u otra entidad emisora de compromisos o políticas) tiene la intención de haber implementado por completo su compromiso o política. "
    },
    {
      "id": "a48",
      "palabra": "GRUPO EMPRESARIAL",
      "definicion": "La totalidad de las entidades jurídicas a las que la empresa está afiliada en una relación en la que cualquiera de las partes controla las acciones o el desempeño del otro. Los factores que se emplean para determinar si una empresa es parte de un grupo empresarial más amplio son: "+
      "•	Formalidad de la relación: ¿Hay una propiedad formal, como a través de una estructura de participación en las inversiones? "+
      "•	Declarado grupo: ¿El grupo ha declarado públicamente que las empresas están vinculadas? "+
      "•	Control familiar: ¿Las empresas son de propiedad de miembros de una misma familia o manejadas por ellos? "+
      "•	Control financiero: ¿Hay arreglos contractuales u otros arreglos financieros que indiquen que una parte controla el desempeño de otra? "+
      "•	Control gerencial: ¿Hay amplio solapamiento de los funcionarios entre empresas? "+
      "•	Control operativo: ¿La tenencia de la tierra es controlada operativamente por un grupo?"+
      "•	Propiedad real: ¿La propiedad final está oculta en empresas a ultramar o por medio del uso de personas designadas? "+
      "•	Recursos compartidos: ¿Las empresas comparten una dirección, terrenos u otros activos físicos, o la provisión de funciones o servicios para la empresa? "
    },
    {
      "id": "a49",
      "palabra": "MAPA DE LA CADENA DE ABASTECIMIENTO",
      "definicion": "El proceso de identificar a los actores en la cadena de abastecimiento de una empresa y la relación entre ellos."
    },
    {
      "id": "a50",
      "palabra": "CADENA DE SUMINISTRO",
      "definicion": "En general, una cadena de suministro agroalimentaria es un conjunto de actividades que"+
      "van de la granja al consumidor, incluyendo la agricultura, procesamiento o producción,"+
      "control de calidad, envasado, almacenamiento, transporte, distribución y comercialización"+
      "Estos escalones operativos son compatibles con los servicios"+
      "logísticos, financieros y técnicos, mientras que ellos mismos apoyan cinco tipos de flujo: 1)"+
      "material físico o productos, 2) flujos financieros, 3) flujos de información, 4) flujos de"+
      "procesos y 5) flujos de los recursos naturales y energía."
    },
    {
      "id": "a60",
      "palabra": "xxxx",
      "definicion": "xxxxx"
    },
  ];

  mostrar: Boolean = false;
  mensaje_enlace: String = 'V';

  ngOnInit(): void {
  }

  mostrarOcultar(){

    if (this.mostrar) {
      this.mostrar = false
      this.mensaje_enlace = 'V'
    }else {
      this.mostrar = true
      this.mensaje_enlace = 'X'
    }

  }

  public getInputValue(inputValue:string){
    if(inputValue.trim() === ""){
      alert("Ingresa una referencia valida para generar la hoja de ruta")
    }
    else{
      localStorage.setItem("id_kobotoolbox",inputValue);
      this.router.navigateByUrl("/hojaderuta");
    }   
  }


  public getInputValue2(){
    window.open("/resultados");
  }

}
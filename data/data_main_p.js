// Тема ЦОК отображается во многих элементах
const themeOfDEC = 'Диагностика и испытание электрического и электромеханического оборудования'
// Номер ФГОС и Тескт ФГОС
const numFgos = '13.02.13 '
const numFgosTxt = 'Эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям)'
// Номер МДК и Текст МДК
const numMDK = '01.02.  '
const numMDKTxt = 'Основы организации работ по испытанию и диагностике электрооборудования'
const razdel = 'Основы организации работ по испытанию и диагностике электрооборудования'
// Массив с рекомендациями
const textOfMethodMaterials = [
    `<p class='pink_subtitle'>Рекомендации для обучающегося</p>
    Просмотрите динамическую инфографику по теме «Диагностика и испытание электрического и электромеханического оборудования»
    Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся
    Обратите внимание на основные вопросы лекции: <br>- Общие вопросы испытаний оборудования; <br>- Послеремонтные испытания; <br>- Диагностика оборудования перед ремонтом; <br>- Виды испытаний; <br>- Контрольно-измерительные приборы.
    При необходимости просмотрите материал еще раз.
    Возвращайтесь к наиболее сложным аспектам темы. 
    Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз.
    <p class='pink_subtitle'>Рекомендации для преподавателя</p> 
    Применение данного ЭОМ в ходе занятия поможет преподавателю мотивировать обучающихся к усвоению нового материала через визуализацию теоретического материала с помощью различных видов графики и видео и его изложение доступным языком, а также через возможность организации интерактивной деятельности.
    Преподаватель может организовать изучение обучающимися образовательных материалов ЭОМ через применение различных педагогических технологий, например:<br>- организовать изучение теоретических материалов ЭОМ до начала учебного занятия, а во время учебного занятия провести беседу, отвечая на вопросы обучающихся, уточняя и расширяя первичные знания;<br>- организовать изучение нового материала с применением материалов ЭОМ непосредственно на занятии, через демонстрацию материалов ЭОМ, в т.ч. иллюстраций (схем, графиков, фото, видео и пр.);<br>- организовать работу обучающихся в группах непосредственно на занятии с использованием учебных материалов ЭОМ;<br>- предложить повторное изучение материалов ЭОМ после проведения учебных занятий с целью закрепления материала и подготовки к промежуточной аттестации и пр.
    В ходе занятия преподавателю предлагается, опираясь на материалы данного ЭОМ раскрыть следующие вопросы:<br>- Общие вопросы испытаний оборудования;<br>- Послеремонтные испытания;<br>- Диагностика оборудования перед ремонтом;<br>- Виды испытаний;<br>- Контрольно-измерительные приборы;<br>- Инструкция по измерению сопротивления изоляции электрической машины;<br>- Инструкция по измерению сопротивления контактов заземляющих, защитных проводников и проводников системы уравнивания и выравнивания потенциалов, и испытания заземляющих устройств электрической машины;<br>- Инструкция по испытанию электрической прочности изоляции повышенным напряжением электрической машины;<br>- Инструкция по проверке скорости срабатывания автоматических выключателей.`,
    `<p class='pink_subtitle'>Рекомендации для обучающегося</p>
    Запустите виртуальный тренажер по теме «Диагностика и испытание электрического и электромеханического оборудования».
    Ознакомьтесь с предложенными материалами и выполните тренировочные тестовые задания.
    Обратите внимание, что на выполнение всех тестовых заданий предусмотрено 2 попытки.
    Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
    При неверном ответе на тестовое задание, вернитесь к предыдущему материалу и изучите его повторно.
    Тренировочные тестовые задания предусматривают отображение правильных вариантов ответов после их выполнения.
    Запустить виртуальный тренажер можно неограниченное количество раз.
     <p class='pink_subtitle'>Рекомендации для преподавателя</p>
     Преподаватель может организовать изучение обучающимися образовательных материалов ЭОМ через применение различных педагогических технологий, например: <br>- организовать изучение практических материалов  ЭОМ  до начала учебного занятия, а во время учебного занятия организовать проведение практической работы на основе материалов ЭОМ; <br>- организовать изучение материалов ЭОМ непосредственно на занятии, выявить наиболее часто встречающие ошибки при выполнении проверочных тестовых заданий, организовать работу над ошибками; <br>- предложить повторное изучение материалов ЭОМ после проведения учебных занятий с целью закрепления материала и подготовки к промежуточной аттестации и пр. <br>Применение данного ЭОМ на занятии поможет активизировать познавательную деятельность обучающихся, способствует  развитию  логического  мышления,  памяти, внимательности, наблюдательности.`,
    `<p class='pink_subtitle'>Рекомендации для обучающегося</p> 
    Запустите интерактивный тренажер по выполнению заданий по теме «Диагностика и испытание электрического и электромеханического оборудования».
    Ознакомьтесь с условиями выполнения тестовых заданий. Обратите внимание на отсутствие подсказок и возможности повторного выполнения заданий.
    Выполните все тестовые задания. Ознакомьтесь с результатами тестирования.
    При наличии ошибок по результатам тестирования вернитесь к изучению теоретического материала.
    Запустить интерактивный тренажер по выполнению заданий возможно неограниченное количество раз.
    <p class='pink_subtitle'>Рекомендации для преподавателя</p>
    Применяя данный ЭОМ преподаватель может мотивировать обучающихся для получения максимального количества баллов при выполнении тестовых заданий, предложенных с целью диагностики приобретенных знаний, умений и навыков, учитывая результаты тестирования при выставлении оценки по теме.
    Преподаватель может анализировать результаты тестирования обучающихся с целью выявления наиболее сложных для понимания вопросов темы, с целью последующей организации работы по устранению данных пробелов в знаниях обучающихся. `
];
// Ключевые слова
const keyWords = `Диагностика \n процесс выявления состояния и работоспособности электрического оборудования с целью определения его технического состояния и выявления неисправностей.
Испытание \n процедура, направленная на проверку соответствия оборудования установленным требованиям и стандартам, а также на оценку его технических характеристик.
Диагностика \n методический подход, используемый для оценки состояния и работоспособности электрического оборудования. Она включает в себя использование различных инструментов и методов, направленных на выявление неисправностей, оценку технического состояния, а также принятие решений о необходимости ремонта или замены
Сопротивление изоляции \n электрический параметр, характеризующий качество изоляции обмоток электрических машин, измеряемый в омах (Ом).
Мегомметр \n прибор для измерения сопротивления изоляции, работающий на высоком напряжении.
Ток утечки \n ток, который проходит через изоляцию электрического оборудования в результате ее недостаточной прочности или повреждений.
Электрическая прочность \n способность изоляции выдерживать электрическое напряжение без пробоя.
Периодические испытания \n испытания, проводимые в процессе эксплуатации оборудования для оценки его состояния и выявления скрытых дефектов.
Послеремонтные испытания \n испытания, проводимые после ремонта оборудования для проверки качества выполненных работ.
Коэффициент абсорбции \n отношение сопротивления изоляции, измеренного через 60 секунд, к сопротивлению, измеренному через 15 секунд, используемое для оценки состояния изоляции.
Заземление \n процесс соединения электрического оборудования с землей для обеспечения безопасности и защиты от электрических ударов.
Автоматический выключатель \n устройство, предназначенное для защиты электрических цепей от перегрузок и коротких замыканий.
Тестирование \n процесс проверки работоспособности и надежности электрического оборудования с использованием различных методов и средств.
Климатические испытания \n испытания, направленные на оценку устойчивости оборудования к воздействию различных климатических условий.
Электромагнитная совместимость \n способность оборудования функционировать в условиях электромагнитных помех без ухудшения его характеристик.
Система уравнивания потенциалов \n система, обеспечивающая равенство электрических потенциалов между различными элементами оборудования для повышения безопасности.
Визуальный осмотр \n первичный метод диагностики, заключающийся в оценке состояния оборудования с помощью зрительного контроля.
Проверка полупроводниковых элементов \n процесс тестирования диодов и тиристоров на работоспособность и соответствие техническим требованиям.
Испытательный трансформатор \n устройство, используемое для подачи повышенного напряжения на электрическое оборудование в процессе испытаний.
Сопротивление контактов \n электрический параметр, характеризующий качество соединений заземляющих и защитных проводников.
Нормативные документы \n официальные документы, содержащие требования и рекомендации по проведению испытаний и диагностике электрического оборудования.`
/* 1) ФГОС СПО
2) ПООП Профессионалитета
3) Профессиональный модуль
4) МДК
5) Раздел
6) Тема*/
const infoContent = 
`${numFgos} ${numFgosTxt}
${numFgos} ${numFgosTxt}
ПМ.01 Осуществление технического обслуживания и ремонта электрического и электромеханического оборудования
${numMDK} ${numMDKTxt}
${razdel}
${themeOfDEC}`
const blockButtonEOM2 = 1; // "Это для разработки и отладки удобно, блокирует кнопки назад и далее в ЭОМ_2 1 true 0 false"
const typeOfEOM3 = 1; // Если 1 то это тест если что то иное то мини-игра
const typeOfEOM1 = 0; // Если 1 то это video если что то иное то dynamic_info
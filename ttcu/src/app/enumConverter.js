const userTypes = {
	STUDENT: "دانشجو",
	TEACHER: "استاد",
	MASTER: "مدیر",
	ADMIN: "مدیر گروه"
}

const uni = {
	SHARIATY_TECHNICAL_COLLEGE:"دانشکده فنی دکتر شریعتی",
    VALIASR_TECHNICAL_COLLEGE:"دانشکده فنی ولیعصر",
    ENGHELAB_TECHNICAL_COLLEGE:"دانشکده فنی انقلاب اسلامی",
    SHAMSIPOUR_TECHNICAL_COLLEGE:"دانشکده فنی شمسی پور"
}

const major = {
    SOFTWARE:"مهندسی نرم افزار",
    ELECTRONICS:"برق و الکترونیک",
    MECHANICS:"مکانیک",
    ICT:"مخابرات",
    ARCHITECTURE:"معماری و نقشه کشی",
    GRAPHICS:"هنر و گرافیک",
    ACCOUNTING:"حسابداری",
    CLOTHING_DESIGN:"تربیت بدنی",
    PHYSICAL_EDUCATION:"طراحی دوخت",
    IT:"فناوری اطلاعات"
}

const postTypes = {
    INVITATION:"فراخوان",
    BEST_PROJECTS:"بهترین پایان نامه ها",
    NEWS:"اخبار دانشگاهی",
    TOP_ENTRIES:"رتبه های برتر کنکور",
    MASTERS_NOTES:"جزوات اساتید",
    ENTRANCE_EXAM_GUIDANCE:"راهنمای کنکور کاردانی به کارشناسی",
    STUDENT_SERVICES:"خدمات دانشجویی"
}

function convertUserType(value)
{
    return userTypes[value];
}

function convertUni(value)
{
    return uni[value];
}

function convertMajor(value)
{
    return major[value];
}

function convertPostType(value)
{
    return postTypes[value];
}

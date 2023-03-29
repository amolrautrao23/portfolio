import java from '../img/core-java.svg'
import database from '../img/database.svg'
import html from '../img/html.svg'
import reactjs from '../img/reactjs.svg'
// documents
import frontendCerti from '../pdf/frontend.pdf'
import javaCerti from '../pdf/java.pdf'
import reactjsCerti from '../pdf/reactjs.pdf'
import databaseCerti from '../pdf/database.pdf'


const ProjectApi =
    [{
        id: 1,
        title: "Front-End Developement",
        imgsrc: html,
        desc: "Completed frontend devlopement certification course from CNC Web World.",
        doc:frontendCerti,
    },
    {
        id: 2,
        title: "React Js",
        imgsrc: reactjs,
        desc: "Done complete basic to advance React Js certification course from CNC Web World.",
        doc:reactjsCerti,
    },
    {
        id: 3,
        title: "Complete Java",
        imgsrc: java,
        desc: "Completed Core and Advance Java devlopement certification course from CNC Web World.",
        doc:javaCerti,
    },
    
    {
        id: 4,
        title: "DBMS",
        imgsrc: database,
        desc: "Completed Database Management System certification course from IIT Kharagpur (NPTEL). ",
        doc:databaseCerti,
    },

]
export default ProjectApi;
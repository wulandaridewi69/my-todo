import Projects from '../components/Project';

// Image
import assetsmirai from '../assets/mirai.png';
import projectmirai from '../assets/project-mirai.png';
import assetsamimono from '../assets/amimono.png';
import projectamimono from '../assets/project_amimono.png';
import assetsvogue from '../assets/vogue.png';
import projectvogue from '../assets/project_vogue.png';
import assetsseo from '../assets/seo.jpg';
import gloding from '../assets/gloding.png';
import alterra from '../assets/alterra.png';
import mnroom from '../assets/mn-room.png';
import logomn from '../assets/logo-mn.png';
import logogo from '../assets/logo-gomeet.png';
import gomeet from '../assets/gomeet.png';
import logose from '../assets/logo-seebooks.png';
import seebooks from '../assets/seebooks.png';
import todo from '../assets/todo.png';
import logoto from '../assets/logo-todo.png';
import progate from '../assets/progate.png';
import logoauto from '../assets/logo-auto.png';
import autoroom from '../assets/autoroom.png';

const data = {
  result: [
    {
      id: 1,
      office: 'Gloding Inc',
      division: 'Frontend Engineer',
      nation: 'Japan',
      year: '2022 - 2023',
      logo: gloding,
      projects: [
        {
          nameProject: 'Mirai',
          url:'',
          github:'',
          logo_project: assetsmirai,
          description: 'Fitur ini adalah  Education List yang terdiri dari untuk tingkat sd,  smp, sma. Pada fitur ini saya membuat  layout dengan dinamic code dan menggunakan data dummy. Fitur ini telah bersifat responsive. pembuatan layout ini berlangsung selama 2 hari',
          techs: ['Next.js', 'Javascript', 'SASS', 'MUI', 'Bootstrap', 'Git/Github', 'Vercel', 'Scrum', 'Atlassian', 'Slack'],
          image: projectmirai,
        },
        {
          nameProject: 'Amimono',
          url:'',
          github:'',
          logo_project: assetsamimono,
          description: 'Web Amimono ini merupakan  web terkait seni tangan yang terdapat fitur artikel, news, story, user, login, Q&A, dan work.  Web ini telah bersifat responsive pada web ini saya diberi tugas untuk merapikan bagian-bagian tertentu. Seperti mengganti font, memperbaiki menu publik dan menu user. Lalu saya menggunakan Jquerry untuk kondisi tertentu seperti ‘jika memiliki foto akan ditampilkan beserta tulisan dan jika tidak memiliki foto maka yang ditampilkan hanya tulisan saja’.',
          techs: ['Java', 'CSS', 'JSF', 'Payara', 'JQuerry', 'Scrum', 'Atlassian', 'Slack'],
          image: projectamimono
        },
        {
          nameProject: 'Nihonvogue',
          url:'',
          github:'',
          logo_project: assetsvogue,
          description: 'Fitur ini adalah  Education List yang terdiri dari untuk tingkat sd,  smp, sma. Pada fitur ini saya membuat  layout dengan dinamic code dan menggunakan data dummy. Fitur ini telah bersifat responsive. pembuatan layout ini berlangsung selama 2 hari',
          techs: ['Java', 'CSS', 'JSF', 'Payara', 'JQuerry', 'Scrum', 'Atlassian', 'Slack'],
          image: projectvogue
        },
        {
          nameProject: 'SEO',
          url:'',
          github:'',
          logo_project: '',
          description: 'SEO adalah singkatan dari Search Engine Optimization, yaitu langkah optimasi yang dilakukan agar website berada di hasil teratas mesin pencari, terutama Google. Kalau SEO website Anda bagus, nantinya website Anda akan langsung muncul di halaman pertama hasil pencari ketika calon pengunjung mencari kata kunci (keyword) tertentu di Google. Dengan begitu, website Anda pun akan ramai pengunjung. Selain itu, SEO juga bisa menjadi strategi digital marketing yang efektif dan hemat untuk membantu Anda meningkatkan traffic website dan konversi',
          techs: ['Microsoft Excel', 'Semrush', 'VS Code', 'Scrum', 'Atlassian', 'Slack'],
          image: assetsseo
        }]
    },
    {
      id: 2,
      office: 'Alterra Academy',
      division: 'Frontend Engineer',
      nation: 'Indonesia',
      year: '2022',
      logo: alterra,
      projects: [
        {
          nameProject: 'MN Room',
          url:'https://mnroom.vercel.app/',
          github:'https://github.com/Capstone-MNRoom/Capstone-MNRoom-FE',
          logo_project: logomn,
          description: 'Website yang dapat melakukan sistem booking ruangan untuk pengadaan suatu acara yang telah dilengkapi dengan CRUD dan sistem pembayaran',
          techs: ['Next.js', 'Javascript', 'Tailwind', 'MUI', 'Bootstrap', 'Git/Github', 'CSS', 'LottieFiles', 'IconFinder', 'Figma', 'Postman', 'Vercel', 'Trello', 'Scrum', 'Discord'],
          image: mnroom,
        },
        {
          nameProject: 'Gomeet',
          url:'',
          github:'https://github.com/wulandaridewi69/Alta-F6-G4-Gomeet',
          logo_project: logogo,
          description: 'Website ini dapat digunakan untuk mengadakan suatu event yang dapat dilakukan dengan sistem jual beli. Tentunya website ini dilengkapi fitur CRUD, sistem pembayaran, map location, dan chat',
          techs: ['Next.js', 'Javascript', 'Tailwind', 'MUI', 'Bootstrap', 'Git/Github', 'CSS', 'LottieFiles', 'Figma', 'Postman', 'Vercel', 'Trello', 'Scrum', 'Discord'],
          image: gomeet
        },
        {
          nameProject: 'Seebooks',
          url:'https://seebooks-ecommerce.surge.sh/',
          github:'https://github.com/wulandaridewi69/Alta-fe6-project2-seebooks_ecommerce',
          logo_project: logose,
          description: 'Website ini merupakan jual beli buku, baik untuk buku baru maupun buku bekas. Website ini telah dilengkapi CRUD dan payment',
          techs: ['React.js', 'Javascript', 'Tailwind', 'MUI', 'Bootstrap', 'Git/Github', 'CSS', 'LottieFiles', 'Figma', 'Postman', 'Vercel', 'Trello', 'Scrum', 'Discord'],
          image: seebooks
        },
        {
          nameProject: 'To Do List',
          url:'https://todo-list-app-opal-delta.vercel.app/',
          github:'https://github.com/Alta-FE6-Wanda/todo-list-app',
          logo_project: logoto,
          description: 'Web yang dapat digunakan untuk membuat kegiatan yang akan dilakukan dengan dilengkapi fitur CRUD dan search',
          techs: ['React.js', 'Javascript', 'Tailwind', 'MUI', 'Bootstrap', 'Git/Github', 'CSS', 'Figma', 'Postman', 'Vercel', 'Discord'],
          image: todo
        }]
    },
    {
      id: 3,
      office: 'Progate',
      division: 'Frontend',
      nation: 'Indonesia',
      year: '2020',
      logo: progate,
      projects: [
        {
          nameProject: 'Auto Room',
          url:'https://autoroom.surge.sh/',
          github:'https://github.com/wulandaridewi69/dts-progate-c54',
          logo_project: logoauto,
          description: 'Website ini (landing page) digunakan sebagai wadah informasi seputar produk terbaru, promo dan potongan harga, serta event-event menarik secara eksklusif',
          techs: ['HTML5', 'Bootstrap', 'Git/Github', 'CSS', 'FlatIcon', 'Adobe Photoshop', 'Surge', 'Scrum', 'Discord'],
          image: autoroom,
        }
      ]
    }
  ]
}

const Experienced = () => {
  return (
    <div>
      {data.result.map((item) => {
        return <Projects
          key={item.id}
          id={item.id}
          division={item.division}
          year={item.year}
          logo={item.logo}
          projects={item.projects}
        />
      })}
    </div>
  )
}

export default Experienced;
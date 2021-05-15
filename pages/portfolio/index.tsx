import { Avatar, Box, Skill, SkillProps, Typography } from '@components'

const SKILLS: Array<SkillProps> = [
  {
    color: 'red',
    image: 'https://img.icons8.com/color/96/000000/html-5.png',
    percent: '90',
    yearStart: 2008,
    children: 'HTML 5',
  },
  {
    color: 'indigo',
    image: 'https://img.icons8.com/color/96/000000/css3.png',
    percent: '75',
    yearStart: 2008,
    children: 'CSS 3',
  },
  {
    color: 'yellow',
    image: 'https://img.icons8.com/color/96/000000/javascript.png',
    percent: '90',
    yearStart: 2008,
    children: 'Javascript',
  },
  {
    color: 'gray',
    image: 'https://img.icons8.com/windows/96/000000/node-js.png',
    percent: '75',
    yearStart: 2019,
    children: 'Node.js',
  },
  {
    color: 'red',
    image: 'https://img.icons8.com/color/96/000000/npm.png',
    percent: '75',
    yearStart: 2018,
    children: 'Npm',
  },
  {
    color: 'blue',
    image: 'https://img.icons8.com/color/96/000000/react-native.png',
    percent: '90',
    yearStart: 2018,
    children: 'React.js',
  },
  {
    color: 'indigo',
    image: 'https://img.icons8.com/color/96/000000/redux.png',
    percent: '90',
    yearStart: 2018,
    children: 'Redux',
  },
  {
    color: 'red',
    image: 'https://img.icons8.com/color/96/000000/git.png',
    percent: '90',
    yearStart: 2016,
    children: 'Git',
  },
  {
    color: 'blue',
    image: 'https://img.icons8.com/color/96/000000/typescript.png',
    percent: '90',
    yearStart: 2016,
    children: 'Typescript',
  },
  {
    color: 'yellow',
    image: 'https://img.icons8.com/color/96/000000/mysql-logo.png',
    percent: '75',
    yearStart: 2016,
    children: 'MySQL',
  },
  {
    color: 'green',
    image: 'https://img.icons8.com/color/96/000000/mongodb.png',
    percent: '50',
    yearStart: 2019,
    children: 'MongoDB',
  },
  {
    color: 'red',
    image: 'https://img.icons8.com/color/96/000000/redis.png',
    percent: '50',
    yearStart: 2019,
    children: 'Redis',
  },
]

export const Portfolio: React.FC = () => {
  return (
    <Box className="w-full items-center justify-center">
      <Avatar
        image="https://avatars.githubusercontent.com/u/4868017?s=400&u=3c1c1cd1bd6955b8c42bd0e878148c897dcfc16b&v=4"
        name="Fábio Maia"
        position="Arquiteto de Software"
      >
        <Typography className="text-md">
          Entusiasta pelas novas tecnologias, ferramentas de melhoria contínua
          do processo de desenvolvimento e qualidade de código. Vasta
          experiência em várias tecnologias, com foco principal no
          desenvolvimento de UI/UX, atualmente em React JS.
        </Typography>
      </Avatar>

      <Typography className="mt-12 mb-6 text-2xl font-bold">
        Competências
      </Typography>

      {SKILLS.map((skill) => (
        <Skill key={skill.children} {...skill}>
          {skill.children}
        </Skill>
      ))}
    </Box>
  )
}

export default Portfolio

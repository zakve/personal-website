import PortfolioCard from '@/components/PortfolioCard'
import { portfolioData } from '../data/portfolio'

type Props = {
}

const PortfolioPage = ({ }: Props) => {
  return (
    <div className='grid gap-6 sm:grid-cols-3 md:grid-cols-4'>
      {
        portfolioData?.map((project, i) => {
          return (
            <div className='' key={i}>
              <PortfolioCard title={project.title} subtitle={project.subtitle} img={project.img} />
            </div>
          )
        })
      }
    </div>
  )
}

export default PortfolioPage

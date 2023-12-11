import { topic } from '~/utils/consts';
import Topic from './topic';
export default function Topics() {
  return (
    <section className="bg-[#16181c] mb-4 rounded-xl border border-[#16181c] text-[#e7e9ea]">
      <h2 className="py-3 px-4 flex items-center text-xl font-extrabold leading-6">İlgini çekebilecek gündemler</h2>
    <div className='grid'>
    {topic.map((topic, index) => <Topic item={topic} key={index}/>)}
    
    </div>
      </section>
  );
}

import {store,json,listNumbers} from './lib.mjs';
export default async()=>{try{const s=store();const cfg=await s.get('config',{type:'json'});const entries=await listNumbers('entry:');const winners=await listNumbers('winner:');return json({open:cfg?.open!==false,count:entries.length,winners})}catch(e){return json({error:e.message},500)}};
export const config={path:'/api/status'};

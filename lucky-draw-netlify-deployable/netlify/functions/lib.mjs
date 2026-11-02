import { getStore } from '@netlify/blobs';
export const store=()=>getStore({name:'lucky-draw-live',consistency:'strong'});
export const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json','cache-control':'no-store'}});
export const authorized=req=>{const pin=process.env.HOST_PIN||'2468';return req.headers.get('x-host-pin')===pin};
export const numberFromKey=k=>Number(k.split(':')[1]);
export async function listNumbers(prefix){const s=store();let cursor;const out=[];do{const page=await s.list({prefix,cursor});for(const b of page.blobs)out.push(numberFromKey(b.key));cursor=page.next_cursor}while(cursor);return out}

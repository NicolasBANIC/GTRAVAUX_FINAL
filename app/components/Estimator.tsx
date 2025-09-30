"use client";
import React,{useMemo,useState}from"react";

type SK="demolition"|"electricite"|"isolation"|"maconnerie"|"peinture"|"platrerie_placo"|"plomberie"|"pose_sol"|"sanitaires";
type DK="none"|"eau"|"incendie";

const RATES:Record<SK,{l:string,u:string,a:number,lo?:number,hi?:number}>={
  demolition:{l:"Démolition",u:"m2",a:150,lo:100,hi:200},
  electricite:{l:"Électricité (rénovation)",u:"m2",a:150,lo:100,hi:200},
  isolation:{l:"Isolation intérieure",u:"m2",a:38,lo:24,hi:52},
  maconnerie:{l:"Maçonnerie",u:"m2",a:100,lo:50,hi:200},
  peinture:{l:"Peinture & finitions",u:"m2",a:35,lo:28,hi:40},
  platrerie_placo:{l:"Plâtrerie & placo",u:"m2",a:45,lo:30,hi:60},
  plomberie:{l:"Plomberie (points d'eau)",u:"unit",a:400,lo:300,hi:800},
  pose_sol:{l:"Pose de sol",u:"m2",a:65,lo:50,hi:110},
  sanitaires:{l:"Sanitaires (appareils)",u:"unit",a:560,lo:200,hi:1400}
};
const UP=0.25, CLEAN:{[k in Exclude<DK,"none">]:{lo:number,a:number,hi:number}}={eau:{lo:8,a:12,hi:15},incendie:{lo:50,a:90,hi:170}};
const formatEuro=(n:number)=>n.toLocaleString("fr-FR",{style:"currency",currency:"EUR",maximumFractionDigits:0});

export default function Estimator(){
  type Line={id:string,s:SK,q:number};
  const [ls,setLS]=useState<Line[]>([]);
  const [dk,setDK]=useState<DK>("none");
  const [da,setDA]=useState(0);

  const det=useMemo(()=>{if(!ls.length)return null;let lo=0,mi=0,hi=0;for(const l of ls){const rt=RATES[l.s],qty=rt.u==="m2"?Math.max(0,l.q):Math.max(0,Math.floor(l.q));lo+=(rt.lo??rt.a*.85)*qty;mi+=rt.a*qty;hi+=(rt.hi??rt.a*1.15)*qty;}return{lo,mi,hi}},[ls]);

  const tot=useMemo(()=>{let T=det;if(!T)return null;let {lo,mi,hi}=T;if(dk!=="none"){lo*=(1+UP);mi*=(1+UP);hi*=(1+UP);const area=Math.max(0,da);const band=CLEAN[dk as "eau"|"incendie"];lo+=band.lo*area;mi+=band.a*area;hi+=band.hi*area;}return{lo,mi,hi}},[det,dk,da]);

  const add=()=>{
    console.log('Adding service...');
    const newId = Date.now().toString() + Math.random().toString(36);
    const newService = {id: newId, s: "demolition" as SK, q: 0};
    console.log('New service:', newService);
    setLS(prevLS => {
      const newList = [...prevLS, newService];
      console.log('Previous list:', prevLS);
      console.log('New list:', newList);
      return newList;
    });
  };
  const up=(id:string,p:Partial<Line>)=>setLS(v=>v.map(x=>x.id===id?{...x,...p}:x));
  const rm=(id:string)=>setLS(v=>v.filter(x=>x.id!==id));

  return <div className="space-y-6">
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-brand-graphite-900 mb-2">
        Calculateur de devis
      </h3>
      <p className="text-brand-graphite-600">
        Estimation TTC indicative (moyennes marché). Devis précis après visite.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-semibold text-brand-graphite-900 mb-4">
        Services à estimer ({ls.length})
      </h4>

      <div className="mb-4">
        <button onClick={add} className="btn btn-secondary text-sm">
          + Ajouter un service
        </button>
      </div>

      {ls.length===0?<div className="text-sm text-brand-graphite-600 italic bg-gray-50 p-4 rounded-xl">
        Ajoutez les services nécessaires à votre projet (Démolition, Électricité, Isolation, Maçonnerie, Peinture, Plâtrerie/Placo, Plomberie, Pose de sol, Sanitaires).
      </div>:
      <div className="space-y-4">
        {ls.map(l=>{
          const rt=RATES[l.s];
          return <div key={l.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-brand-graphite-200 rounded-xl">
            <div>
              <label className="block text-sm font-medium text-brand-graphite-700 mb-2">
                Service
              </label>
              <select value={l.s} onChange={e=>up(l.id,{s:e.target.value as SK})} className="w-full rounded-xl border border-brand-graphite-200 px-3 py-2 focus:ring-2 focus:ring-brand-orange-600 focus:border-brand-orange-600">
                {Object.entries(RATES).map(([k,v])=><option key={k} value={k}>{v.l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-graphite-700 mb-2">
                {rt.u==="m2"?"Surface (m²)":(l.s==="sanitaires"?"Nb appareils":"Nb points d'eau")}
              </label>
              <input type="number" value={l.q||""} onChange={e=>up(l.id,{q:+e.target.value})} className="w-full rounded-xl border border-brand-graphite-200 px-3 py-2 focus:ring-2 focus:ring-brand-orange-600 focus:border-brand-orange-600" placeholder={rt.u==="m2"?"ex: 40":"ex: 2"}/>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-brand-graphite-600">
                ~ {formatEuro(rt.a)} / {rt.u==="m2"?"m²":"unité"}
              </div>
            </div>
            <div className="flex items-end">
              <button onClick={()=>rm(l.id)} className="text-sm text-red-600 hover:underline" type="button">Supprimer</button>
            </div>
          </div>
        })}
      </div>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="block text-sm font-medium text-brand-graphite-700 mb-2">
            Après sinistre
          </label>
          <select value={dk} onChange={e=>setDK(e.target.value as DK)} className="w-full rounded-xl border border-brand-graphite-200 px-3 py-2 focus:ring-2 focus:ring-brand-orange-600 focus:border-brand-orange-600">
            <option value="none">— Aucune —</option>
            <option value="eau">Dégât des eaux</option>
            <option value="incendie">Incendie / fumées</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-graphite-700 mb-2">
            Surface à traiter (m²)
          </label>
          <input type="number" value={da||""} onChange={e=>setDA(+e.target.value)} className="w-full rounded-xl border border-brand-graphite-200 px-3 py-2 focus:ring-2 focus:ring-brand-orange-600 focus:border-brand-orange-600" placeholder="ex: 40" disabled={dk==="none"}/>
        </div>
        {dk!=="none"&&<div className="md:col-span-2 text-sm text-brand-orange-700 bg-brand-orange-50 p-3 rounded-xl">
          +{Math.round(UP*100)}% + nettoyage {dk==="eau"?"8–15":"50–170"} €/m².
        </div>}
      </div>
    </div>

    <div className="border-t pt-6">
      <h4 className="text-lg font-semibold text-brand-graphite-900 mb-4">
        Estimation
      </h4>

      {!tot?<div className="text-brand-graphite-600 italic text-center py-8">
        Ajoutez des services pour obtenir une estimation.
      </div>:
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="text-sm text-green-700 mb-1">Borne basse</div>
          <div className="text-xl font-bold text-green-800">{formatEuro(tot.lo)}</div>
        </div>
        <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="text-sm text-blue-700 mb-1">Médiane</div>
          <div className="text-xl font-bold text-blue-800">{formatEuro(tot.mi)}</div>
        </div>
        <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-xl">
          <div className="text-sm text-orange-700 mb-1">Borne haute</div>
          <div className="text-xl font-bold text-orange-800">{formatEuro(tot.hi)}</div>
        </div>
      </div>}
      
      <div className="text-center">
        <a href="/contact" className="btn btn-primary inline-block">
          Obtenir un devis précis
        </a>
        <p className="text-xs text-brand-graphite-500 mt-2">
          Estimations TTC indicatives.
        </p>
      </div>
    </div>
  </div>;
}
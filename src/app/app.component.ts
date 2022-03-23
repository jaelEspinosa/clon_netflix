import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix_app';

comedyFilms:any = {
  section : "Comedia",
  films : [{
    title: "Casi 300",
    image: "./assets/img/Comedia/casi300.webp" /* "https://randomwordgenerator.com/img/picture-generator/5ee3dc4a4a4faa0df7c5d57bc32f3e7b1d3ac3e456597641702c7cd291_640.jpg"  */
  },
  {
    title: "Los Cazafantasmas",
    image: "./assets/img/Comedia/cazafantasmas.webp"
  },
  {
    title: "El Dictador",
    image: "./assets/img/Comedia/dictador.webp"
  },
  {
    title: "Scary Movie III",
    image: "./assets/img/Comedia/scarymovie3.webp"
  },
  {
    title: "Los Padres de Ella",
    image: "./assets/img/Comedia/padresella.webp"
  },
  {
    title: "Erase una vez en Hollywood",
    image: "./assets/img/Comedia/erasehollywood.webp"
  },
  {
    title: "Rick & Morti",
    image: "./assets/img/Comedia/rickandmorty.webp"
  },
  ]
}

terrorFilms:any = {
  section : "Terror",
  films : [{
    title: "El Apostol",
    image: "./assets/img/Terror/apostol.jpg" /* "https://randomwordgenerator.com/img/picture-generator/5ee3dc4a4a4faa0df7c5d57bc32f3e7b1d3ac3e456597641702c7cd291_640.jpg"  */
  },
  {
    title: "La Calle del terror parte 2",
    image: "./assets/img/Terror/calleterror.jpg"
  },
  {
    title: "Infierno Bajo el Agua",
    image: "./assets/img/Terror/infiernoagua.webp"
  },
  {
    title: "Insidius 2",
    image: "./assets/img/Terror/insidious2.webp"
  },
  {
    title: "Life(Vida)",
    image: "./assets/img/Terror/life.webp"
  },
  {
    title: "Malasaña, 32",
    image: "./assets/img/Terror/malasana.webp"
  },
  {
    title: "Reflejos",
    image: "./assets/img/Terror/reflejos.webp"
  },
  ]
}
accionFilms:any = {
  section : "Acción",
  films : [{
    title: "Ejércio de los Muertos",
    image: "./assets/img/Accion/ejercitomuertos.jpg" /* "https://randomwordgenerator.com/img/picture-generator/5ee3dc4a4a4faa0df7c5d57bc32f3e7b1d3ac3e456597641702c7cd291_640.jpg"  */
  },
  {
    title: "El Protector",
    image: "./assets/img/Accion/elprotector.webp"
  },
  {
    title: "Equalizer 2",
    image: "./assets/img/Accion/equalizer2.webp"
  },
  {
    title: "Heat",
    image: "./assets/img/Accion/heat.webp"
  },
  {
    title: "Jack Reacher",
    image: "./assets/img/Accion/jackreacher.webp"
  },
  {
    title: "Misión Imposible: Nacion Secreta",
    image: "./assets/img/Accion/misionimposiblenacion.webp"
  },
  {
    title: "Terminator 2",
    image: "./assets/img/Accion/terminator2.webp"
  },
  ]
}
topGallery:any ={
  title: "Los más vistos de hoy",
  gallery:[{
    position: 1,
    image : "./assets/img/Top10/1-papel.webp",
    name: "La Casa de Papel"
  },
  {
    position: 2,
    image : "./assets/img/Top10/2-reina.webp",
    name: "La Reina del Flow"
  },
  {
    position: 3,
    image : "./assets/img/Top10/3-titanes.webp",
    name: "Titans"
  },
  {
    position: 4,
    image : "./assets/img/Top10/4-lostinspace.webp",
    name: "Los in the Space"
  },
  {
    position: 5,
    image : "./assets/img/Top10/5-dondecaben.webp",
    name: "Donde caben dos"
  },
]
}

sciFiFilms:any = {
  section : "ciencia ficción",
  films : [{
    title: "Sexto dia",
    image: "./assets/img/Sci-fi/6dia.webp" /* "https://randomwordgenerator.com/img/picture-generator/5ee3dc4a4a4faa0df7c5d57bc32f3e7b1d3ac3e456597641702c7cd291_640.jpg"  */
  },
  {
    title: "12 monos",
    image: "./assets/img/Sci-fi/12monos.webp"
  },
  {
    title: "after earth",
    image: "./assets/img/Sci-fi/afterearth.webp"
  },
  {
    title: "core",
    image: "./assets/img/Sci-fi/core.webp"
  },
  {
    title: "passengers",
    image: "./assets/img/Sci-fi/passengers.webp"
  },
  {
    title: "doom",
    image: "./assets/img/Sci-fi/doom.webp"
  },
  {
    title: "jumper",
    image: "./assets/img/Sci-fi/jumper.webp"
  },
  ]
}
theme: string = "Dark"
isDark: boolean = false;

changeDark = ()=>{
  if(this.isDark == false){
    this.isDark=true
    this.theme="Ligth"
    }else{
    this.isDark=false;
    this.theme="Dark"
    }
}

}

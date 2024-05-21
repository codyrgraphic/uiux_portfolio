//Project-1 - Narai
import srcsetwebp1 from '/assets/images/project-1.png?w=500;700;900;1200&format=webp&as=srcset'
import srcsetpng1 from '/assets/images/project-1.png?w=500;700;900;1200&format=png&as=srcset'
import { src as placeholder1} from '/assets/images/project-1.png?w=100&as=metadata'

document.querySelector('#project-1').innerHTML = `
  <picture>
    <source srcset="${srcsetwebp1}" type="image/webp"/>
    <source srcset="${srcsetpng1}" type="image/png"/>
    <img 
        src="${placeholder1}"
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        class="w-full corner-xl"
        alt="A thumbnail of a japanese study app"/>
  </picture>
`

//Project-2 - UseVerb
import srcsetwebp2 from '/assets/images/project-2.png?w=500;700;900;1200&format=webp&as=srcset'
import srcsetpng2 from '/assets/images/project-2.png?w=500;700;900;1200&format=png&as=srcset'
import { src as placeholder2} from '/assets/images/project-2.png?w=100&as=metadata'

document.querySelector('#project-2').innerHTML = `
<picture >
    <source srcset="${srcsetwebp2}" type="image/webp"/>
    <source srcset="${srcsetpng2}" type="image/png"/>
    <img 
        src="${placeholder2}"
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        class="w-full"
        alt="A thumbnail of a recruitment platform"/>
  </picture>
`

//Cody Roberts Photo
import codyrobertsphotosrcsetwebp from '/assets/images/codyroberts-photo.webp?w=128&format=png&as=srcset'
import codyrobertsphotosrcsetpng from '/assets/images/codyroberts-photo.png?w=128&format=png&as=srcset'
import { src as codyrobertsphotoplaceholder} from '/assets/images/project-2.png?w=128&as=metadata'

document.querySelector('#codyroberts-photo').innerHTML = `
  <picture>
    <source srcset="${codyrobertsphotosrcsetwebp}" type="image/webp"/>
    <source srcset="${codyrobertsphotosrcsetpng}" type="image/png"/>
    <img 
        src="${codyrobertsphotoplaceholder}"
        loading="lazy"
        class="w-4xl"
        alt="A thumbnail ofIs itr a japanese study app"/>
  </picture>
`
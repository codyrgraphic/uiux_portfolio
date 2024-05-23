// Project-1 - Narai
import srcsetwebp1 from '/assets/images/project-1.png?w=500;700;900;1200&format=webp&as=srcset'
import srcsetpng1 from '/assets/images/project-1.png?w=500;700;900;1200&format=png&as=srcset'
import { src as placeholder1 } from '/assets/images/project-1.png?w=100&as=metadata'

const project1Element = document.querySelector('#project-1');
if (project1Element) {
  project1Element.innerHTML = `
    <picture>
      <source srcset="${srcsetwebp1}" type="image/webp"/>
      <source srcset="${srcsetpng1}" type="image/png"/>
      <img 
          src="${placeholder1}"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          class="w-full w-full scale-110"
          alt="A thumbnail of a japanese study app"/>
    </picture>
  `;
}

// Project-2 - UseVerb
import srcsetwebp2 from '/assets/images/project-2.png?w=500;700;900;1200&format=webp&as=srcset'
import srcsetpng2 from '/assets/images/project-2.png?w=500;700;900;1200&format=png&as=srcset'
import { src as placeholder2 } from '/assets/images/project-2.png?w=100&as=metadata'

const project2Element = document.querySelector('#project-2');
if (project2Element) {
  project2Element.innerHTML = `
    <picture>
      <source srcset="${srcsetwebp2}" type="image/webp"/>
      <source srcset="${srcsetpng2}" type="image/png"/>
      <img 
          src="${placeholder2}"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          class="w-full scale-110"
          alt="A thumbnail of a recruitment platform"/>
    </picture>
  `;
}

// Elements-1
import elements1srcsetwebp from '/assets/images/elements-1.webp?w=128&format=webp&as=srcset'
import elements1srcsetpng from '/assets/images/elements-1.png?w=128&format=png&as=srcset'
import { src as elements1placeholder } from '/assets/images/elements-1.png?w=128&as=metadata'

const elements1Element = document.querySelector('#elements-1');
if (elements1Element) {
  elements1Element.innerHTML = `
    <picture>
      <source srcset="${elements1srcsetwebp}" type="image/webp"/>
      <source srcset="${elements1srcsetpng}" type="image/png"/>
      <img 
          src="${elements1placeholder}"
          loading="lazy"
          class="w-full  scale-110 blur-20"
          alt="A thumbnail of Elements-1"/>
    </picture>
  `;
}

// Cody Roberts Photo
import codyrobertsphotosrcsetwebp from '/assets/images/cody-roberts-ui-ux-designer-photo.webp?w=256&format=webp&as=srcset'
import codyrobertsphotosrcsetpng from '/assets/images/cody-roberts-ui-ux-designer-photo.png?w=256&format=png&as=srcset'
import { src as codyrobertsphotoplaceholder } from '/assets/images/cody-roberts-ui-ux-designer-photo.png?w=128&as=metadata'

const codyRobertsPhotoElement = document.querySelector('#cody-roberts-ui-ux-designer-photo');
if (codyRobertsPhotoElement) {
  codyRobertsPhotoElement.innerHTML = `
    <picture>
      <source srcset="${codyrobertsphotosrcsetwebp}" type="image/webp"/>
      <source srcset="${codyrobertsphotosrcsetpng}" type="image/png"/>
      <img 
          src="${codyrobertsphotoplaceholder}"
          loading="lazy"
          class="w-4xl w-7xl-sm"
          alt="A thumbnail of a japanese study app"/>
    </picture>
  `;
}

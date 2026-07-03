# Arquitectura de Exportación de PDF Vectoriales (React + Next.js)

Esta arquitectura permite generar documentos PDF profesionales donde el texto es **seleccionable, copiable y de alta resolución (vectorial)**, utilizando `@react-pdf/renderer`.

## 1. El Tríptico de Componentes
La solución se divide en tres capas para garantizar rendimiento y estabilidad:

### A. El Lanzador (`Downloader`)
Ubicado en `src/components/cv-pdf-downloader.tsx`. 
- **Carga Diferida (Lazy Loading):** No carga la librería PDF al inicio (pesa ~2MB). Solo la importa dinámicamente (`import('@react-pdf/renderer')`) cuando el usuario hace clic.
- **Sanitización de Datos:** Convierte objetos complejos de React/Next en **strings planos**. Esto evita que el motor del PDF colapse al intentar procesar proxies o estados de React.

### B. El Plano (`Document`)
Ubicado en `src/components/cv-document.tsx`.
- Utiliza componentes primitivos: `<Document>`, `<Page>`, `<View>`, `<Text>`.
- **Estilos:** Se definen con `StyleSheet.create`, similar a React Native. No usa CSS estándar de la web.
- **Fuentes:** Usa fuentes estándar (Helvetica) para asegurar que el texto sea siempre seleccionable.

### C. El Motor de Renderizado
- La generación ocurre en el **lado del cliente (navegador)**. 
- Transforma el componente de React en un `Blob` (binario) y crea una URL temporal (`URL.createObjectURL`) para disparar la descarga.

---

## 2. Instrucción para Implementar en Menta IA (Prompt para el Agente)

"Necesito implementar un generador de propuestas en PDF utilizando la arquitectura de @react-pdf/renderer en Next.js. Sigue estas directrices estrictas:

1. **Instalación:** Asegúrate de que `@react-pdf/renderer` esté en el package.json.
2. **Componente de Estilo (Template):**
   - Crea un archivo `ProposalDocument.tsx` que use solo `<Document>`, `<Page>`, `<View>` y `<Text>`.
   - Define el diseño con `StyleSheet.create`. Usa colores corporativos (ej: `#003049` para títulos).
   - El componente debe recibir un objeto `data` donde todas las propiedades sean **strings o arrays de strings**.
3. **Componente Lanzador (UI):**
   - Crea un botón `ProposalPdfDownloader.tsx` con `'use client'`.
   - Implementa un `handleDownload` asíncrono.
   - Dentro de `handleDownload`, realiza el `import { pdf } from '@react-pdf/renderer'`.
   - Crea una función `sanitizeProposalData` que limpie el objeto de la propuesta, asegurando que no haya valores nulos o indefinidos.
   - Genera el blob: `const blob = await pdf(<ProposalDocument data={safeData} />).toBlob();`.
   - Usa un `<a>` invisible para descargar el archivo con un nombre dinámico: `Propuesta_Cliente_Nombre.pdf`.
4. **Manejo de Estados:** Muestra un loader (`Loader2`) mientras el PDF se genera (suele tardar 1-2 segundos)."

---
*Documentación generada para Efraín G.B. - EfrainGB.org*

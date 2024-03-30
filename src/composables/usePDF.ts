// typescript don't check errors on this file.
// @ts---nocheck

import { jsPDF } from 'jspdf';
import type { jsPDFOptions } from "jspdf";
import { callAddFont } from "@/assets/fonts/Vazirmatn-VariableFont_wght-normal";

// create sizes based on Flight PDF measurements
class pdfSizeMaker {
  public unitOfMeasurement: string = "px";
  width: number;
  height: number;
  margin: number;
  constructor(width: number, height: number, margin: number) {
    this.width = width;
    this.height = height;
    this.margin = margin;
  }
}

export function usePDF() {
  jsPDF.API.events.push(['addFonts', callAddFont]);

  async function jsPDFPersian() {
    const pdfSizes = new pdfSizeMaker(612, 791, 16);
    const doc = new jsPDF({
      unit: pdfSizes.unitOfMeasurement,
      format: [pdfSizes.width, pdfSizes.height],
      compress: true,
    } as jsPDFOptions);

    doc.setFont("Vazirmatn-VariableFont_wght");

    doc.setFontSize(22);
    doc.text("مستیم درد منو دیگه دوا نمیكنه", pdfSizes.width - pdfSizes.margin, 40, { align: "right", isOutputRtl: true }, null);

    doc.setFontSize(16);
    doc.text("غم با من زاده شده منو رها نمیكنه.", pdfSizes.width - pdfSizes.margin, 70, { align: "right", isOutputRtl: true }, null);
    doc.text("خسته از هركی كه بود خسته از هركی كه هست", pdfSizes.width - pdfSizes.margin, 100, { align: "right", isOutputRtl: true }, null);
    doc.text("راه میفتم كه برم مثل هر شب مست مست", pdfSizes.width - pdfSizes.margin, 120, { align: "right", isOutputRtl: true }, null);

    doc.save("daniel-qolami.pdf");
  }

  return {
    jsPDFPersian,
  };
}

import PptxGenJS from "pptxgenjs";


export const generatePPT = async ({ data, fileName, download }) => {
    try {
        const ppt = new PptxGenJS();
        console.log(data);
        // Create slides with data
        data.forEach((item) => {
            const slide = ppt.addSlide();

            const imageUrl = item.images?.[0]?.replace(/\+/g, ' ') || "https://via.placeholder.com/1280x720";
            slide.addImage({
                path: imageUrl,
                x: 0,
                y: 0,
                w: "100%",
                h: "100%",
                crossOrigin: "anonymous"
            });

            slide.addText(`
                Name: ${item.screenName}
                Location: ${item?.location?.address}
                Coordinates: ${item?.location?.geographicalLocation?.latitude}, ${item?.location?.geographicalLocation?.longitude}
            `, {
                x: 0,
                y: 4.6,
                w: "100%",
                h: 1,
                fontSize: 10,
                color: "000000",
                fill: { color: "FFFF00" },
                align: "left",
            });

            slide.addText(`
                Resolution: ${item?.screenResolution} pixels
                Size: ${item?.screenLength} ft x ${item?.screenWidth} ft
                Ratio: ${item?.screenDimensions}
            `, {
                x: 4,
                y: 4.6,
                w: "100%",
                h: 1,
                fontSize: 10,
                color: "000000",
                align: "left",
                fill: { color: "FFFF00" },
            });
            slide.addText(`
                Slot Length: ${item?.slotLengthSeconds} seconds
                Loop Length: ${item?.loopLengthSeconds} seconds
                Deliverable: ${item?.totalSlotForOneBrand} Slots/Day
            `, {
                x: 5,
                y: 4.6,
                w: "100%",
                h: 1,
                fontSize: 10,
                color: "000000",
                align: "left",
                fill: { color: "FFFF00" },
            });
            slide.addText(`
                Operational Hours: ${item?.operationalDuration?.totalDuration} Hrs
                On Time: ${item?.operationalDuration?.onTime}
                Off Time: ${item?.operationalDuration?.offTime}
            `, {
                x: 7,
                y: 4.6,
                w: "100%",
                h: 1,
                fontSize: 10,
                color: "000000",
                align: "left",
                fill: { color: "FFFF00" },
            });
        });

        if (download) {
            // Download the PPT directly
            await ppt.writeFile({ fileName: `${fileName}.pptx` });
            return null; // Return null when download happens
        } else {
            // Return the PPT as a Blob
            const pptxBlob = await ppt.write("blob");
            const pptxFile = new File([pptxBlob], 'presentation.pptx', { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
            return pptxFile; // Return the Blob
        }
    } catch (error) {
        console.error("Error generating PPT:", error);
        throw new Error("Failed to generate PPT");
    }
};

const Command = require("../structures/Command.js");
const { updatePetrolPrice } = require("../lib/petrol.js");
const petrolData = require("../data/petrolimex.json");

module.exports = new Command({
    name: "giaxang",
    description: "xem gia xang",

    async run(message, args, client) {
        if (message.author.bot) return;
        console.log(message.author.tag, "used a!giaxang");

        if (args[1] == "update") {
          updatePetrolPrice()
        }

        // too lazy to filter out the data, let's just show everything first
        const headers = ["Loại xăng/dầu", "Giá vùng 1", "Giá vùng 2"];
        const rows = petrolData.map((data) => [
            data.Title,
            `${data.Zone1Price.toLocaleString("vi-VN")}đ`,
            `${data.Zone2Price.toLocaleString("vi-VN")}đ`,
        ]);
        const widths = headers.map((header, index) =>
            Math.max(header.length, ...rows.map((row) => row[index].length))
        );
        const center = (value, width) => {
            const padding = width - value.length;
            const leftPadding = Math.floor(padding / 2);
            return " ".repeat(leftPadding) + value + " ".repeat(padding - leftPadding);
        };
        const formatRow = (row) =>
            `| ${row
                .map((cell, index) =>
                    index === 0 ? cell.padEnd(widths[index]) : center(cell, widths[index])
                )
                .join(" | ")} |`;
        const separator = "-".repeat(widths.reduce((total, width) => total + width, 0) + 10);

        let reply = `\`\`\`\n${formatRow(headers)}\n${separator}\n`;
        reply += rows.map(formatRow).join("\n");
        reply += `\n\`\`\`\n`;
        const lastModified = new Date(petrolData[0].LastModified);
        reply = reply + `-# Nguồn: [Petrolimex](<https://petrolimex.com.vn>) - Cập nhật: ${lastModified.toLocaleTimeString("vi-VN", {hour: '2-digit', minute: '2-digit'})}, ngày ${lastModified.toLocaleDateString("vi-VN")}\n`
        message.reply(reply);
    }
});

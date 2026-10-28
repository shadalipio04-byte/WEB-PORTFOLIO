
function openProject(imagePath) {
    const preview = document.getElementById("project-preview");
    const previewImage = document.getElementById("preview-image");

    if (!preview || !previewImage) return;

    previewImage.src = imagePath;
    previewImage.style.display = "block";

    preview.classList.add("active");
    preview.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeProject() {
    const preview = document.getElementById("project-preview");
    const previewImage = document.getElementById("preview-image");

    if (!preview || !previewImage) return;

    preview.classList.remove("active");
    preview.setAttribute("aria-hidden", "true");

    previewImage.style.display = "none";
    previewImage.src = "";

    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const preview = document.getElementById("project-preview");
    const previewImage = document.getElementById("preview-image");

    if (!preview || !previewImage) return;

    preview.addEventListener("click", function (event) {
        if (event.target === preview) {
            closeProject();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && preview.classList.contains("active")) {
            closeProject();
        }
    });
});

const STORAGE_KEY_CARTILLA_ROVER = "cartilla_rover_vachalal_2026_097_data";

const pruebasDataDefault = [
    { id: 1, titulo: "Un Mes como Aspirante", estado: "pendiente", teoria: "A) Si el aspirante fue traspasado de la Tropa Tazumal #97, deberá cumplir con un mes como aspirante de clan.\nB) Si el aspirante no perteneció a la Tropa Tazumal #97 y se integró directamente al Clan Vachalal Ah Puch, deberá cumplir con un periodo de 3 meses.\n\nEn ambos casos, el aspirante debe asistir sin interrupción a las actividades del clan.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 2, titulo: "Inscripción Rover (ASES)", estado: "pendiente", teoria: "Todo aspirante del Clan Vachalal Ah Puch debe cumplir el requisito de inscripción a la Asociación de Scouts de El Salvador (ASES) para ser reconocido como miembro activo del Movimiento Scout Mundial.\n\nRequiere la cancelación de la cuota de inscripción anual.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 3, titulo: "Uniforme Rover", estado: "pendiente", teoria: "Conocer el correcto uso y ubicación de cada elemento del uniforme scout:\n- Gorra azul oscuro e Insignia Mundial\n- Matrícula e Insignia Nacional\n- Cinta de Departamento y No. de Grupo\n- Pañoleta y Cinta de cargo\n- Especialidades e Insignia de Compromiso\n- Camisa, cincho, pantalón/falda/jeans y medias azul oscuro.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 4, titulo: "Oración Rover (Otras)", estado: "pendiente", teoria: "Comprender, reflexionar y memorizar las oraciones tradicionales del escultismo:\n\n- Oración del Lobato\n- Oración Scout\n- Oración del Rover: 'Dame Señor: Un corazón vigilante... un corazón noble... un corazón fuerte... un corazón recto... un corazón generoso para SERVIR. Así sea.'\n- Oración del Jefe y del Guía.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 5, titulo: "Promesa Rover", estado: "pendiente", teoria: "La Promesa Rover es la misma promesa scout:\n'Yo por mi honor prometo hacer todo cuanto de mi dependa, para cumplir mis deberes para con Dios y la Patria, ayudar al prójimo en toda circunstancia y cumplir fielmente la ley scout.'", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 6, titulo: "Ley Scout", estado: "pendiente", teoria: "La Ley Scout es el cimiento del Movimiento:\n1. El scout cifra su honor en ser digno de confianza.\n2. El scout es leal a su patria, padres, jefes y subordinados.\n3. El scout es útil y ayuda a los demás sin recompensa.\n4. El scout es amigo y hermano de todo scout.\n5. El scout es cortés y caballeroso.\n6. El scout ve en la naturaleza la obra de Dios.\n7. El scout obedece sin replicar.\n8. El scout ríe y canta en las dificultades.\n9. El scout es económico y trabajador.\n10. El scout es limpio y sano de pensamientos y acciones.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 7, titulo: "Virtudes y Principios Scout", estado: "pendiente", teoria: "VIRTUDES SCOUT:\n- Lealtad: Ser fiel.\n- Abnegación: Sacrificio espontáneo.\n- Pureza: Obligaciones para con Dios.\n\nPRINCIPIOS SCOUT:\n- El scout se honra de su fe.\n- El scout es hijo de la patria.\n- El deber del scout principia en su casa.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 8, titulo: "Lema Rover e Insignia Scout", estado: "pendiente", teoria: "LEMA: 'Siempre Listos para Servir' o 'Servir'.\n\nINSIGNIA ROVER: Representa el marco simbólico de la Caballería de la Edad Media. Compuesta por el Yelmo, las letras 'R y S' y 'El Salvador'.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 9, titulo: "Seña y Saludo Rover", estado: "pendiente", teoria: "SEÑA SCOUT: Se hace levantando tres dedos. Significa: Firme, Seguro, Constante, y que el fuerte protege al débil.\n\nSALUDO SCOUT: Muestra de respeto, honor y libertad.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 10, titulo: "Nudos Básicos", estado: "pendiente", teoria: "Listado de nudos básicos obligatorios:\n1. Cuadrado\n2. Margarita\n3. Capuchino\n4. Vuelta Escota\n5. Ballestrinque\n6. Pescador\n7. Leñador\n8. As de Guía", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 11, titulo: "Pistas", estado: "pendiente", teoria: "Dominar el sistema de señas de pistas en ruta:\n- Camino a seguir, ir más a prisa, camino a evitar, ir a la derecha, obstáculos, agua potable/no potable, ataque, campamento, fin de pista.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 12, titulo: "Órdenes con Silbato", estado: "pendiente", teoria: "Uso del Código Morse mediante el sonido del silbato (puntos y rayas) para órdenes de formación y campamento en el Clan.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 13, titulo: "Señales de Brazo y Formaciones", estado: "pendiente", teoria: "Formaciones oficiales de Tropa y Clan guiadas por el Jefe:\n- Estrella\n- Columna (Cerrada o Abierta)\n- Semicírculo y Círculo\n- Línea\n- Rectángulo\n- Filas", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 14, titulo: "Historia del Apretón de Manos", estado: "pendiente", teoria: "El apretón de manos scout se hace con la mano izquierda (la mano de la amistad) sin entrelazar los dedos meñique y anular, recordando al jefe ashanti 'Prempeh' y a Baden-Powell.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 15, titulo: "Historia del Escultismo", estado: "pendiente", teoria: "Robert Stephenson Smyth Lord Baden-Powell nació el 22 de febrero de 1857. Héroe de Mafeking, fundó el escultismo en la isla de Brownsea en 1907 y publicó 'Escultismo para Muchachos' en 1908.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" },
    { id: 16, titulo: "Nombre Tótem", estado: "pendiente", teoria: "El nombre tótem se escoge de las áreas del Reino Animal o Mitología. En el Grupo Scout Tazumal 97, de preferencia debe ser traducido al náhuatl.", fechaProg: "", fechaAprob: "", sinodal: "", firmaImagen: "" }
];

function cargarPruebasGuardadas() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_CARTILLA_ROVER);
        if (!raw) return pruebasDataDefault.map(p => ({ ...p }));
        const guardadas = JSON.parse(raw);
        if (!Array.isArray(guardadas) || guardadas.length === 0) {
            return pruebasDataDefault.map(p => ({ ...p }));
        }
        return pruebasDataDefault.map(base => {
            const match = guardadas.find(g => g.id === base.id);
            return match ? { ...base, ...match } : { ...base };
        });
    } catch (_) {
        return pruebasDataDefault.map(p => ({ ...p }));
    }
}

function guardarPruebasEnStorage() {
    try {
        localStorage.setItem(STORAGE_KEY_CARTILLA_ROVER, JSON.stringify(pruebasData));
    } catch (_) {}
}

let pruebasData = cargarPruebasGuardadas();
let pruebaSeleccionadaId = null;
let rolActual = "aspirante";
let signaturePad = null;

function ajustarTamanoCanvasFirma() {
    const canvas = document.getElementById('signatureCanvas');
    if (!canvas || typeof SignaturePad === 'undefined') return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    const width = rect.width > 0 ? rect.width : 400;
    const height = rect.height > 0 ? rect.height : 130;

    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);

    const ctx = canvas.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(ratio, ratio);

    if (!signaturePad) {
        signaturePad = new SignaturePad(canvas, {
            backgroundColor: 'rgb(255, 255, 255)'
        });
    } else {
        const dataActual = signaturePad.toData();
        signaturePad.clear();
        if (dataActual && dataActual.length > 0) {
            signaturePad.fromData(dataActual);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarListaPruebas(pruebasData);
    renderizarMapaIslas(pruebasData);
    actualizarProgreso();
    ajustarTamanoCanvasFirma();

    window.addEventListener('resize', () => {
        if (rolActual === 'dirigente' && pruebaSeleccionadaId !== null) {
            ajustarTamanoCanvasFirma();
            const prueba = pruebasData.find(p => p.id === pruebaSeleccionadaId);
            if (prueba && prueba.firmaImagen && signaturePad) {
                signaturePad.clear();
                signaturePad.fromDataURL(prueba.firmaImagen);
            }
        }
    });

    // Botón para limpiar la firma
    const btnLimpiarFirma = document.getElementById('btnLimpiarFirma');
    if (btnLimpiarFirma) {
        btnLimpiarFirma.addEventListener('click', () => {
            if (signaturePad) signaturePad.clear();
        });
    }

    // Selector de Rol (Aspirante / Dirigente)
    const selectRol = document.getElementById('selectRol');
    if (selectRol) {
        rolActual = selectRol.value || 'aspirante';
        selectRol.addEventListener('change', (e) => {
            rolActual = e.target.value;
            if (pruebaSeleccionadaId !== null) {
                seleccionarPrueba(pruebaSeleccionadaId);
            }
        });
    }

    // Volver al mapa haciendo clic en el título del Clan
    const btnHome = document.getElementById('btnHome');
    if (btnHome) {
        btnHome.addEventListener('click', () => {
            pruebaSeleccionadaId = null;
            document.getElementById('pruebaDetail').classList.add('hidden');
            document.getElementById('welcomeCard').classList.remove('hidden');
            renderizarListaPruebas(pruebasData);
        });
    }

    // Botón para generar reporte formal e imprimible con firmas reales
    const btnReporte = document.getElementById('btnGenerarReporte');
    if (btnReporte) {
        btnReporte.addEventListener('click', () => {
            let aprobadasCount = pruebasData.filter(p => p.estado === 'aprobada').length;
            let porcentaje = Math.round((aprobadasCount / 16) * 100);

            let htmlVentana = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <title>Cartilla Oficial - Eduardo Recinos - Clan Vachalal Ah Puch</title>
                    <style>
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #1a202c; max-width: 850px; margin: 0 auto; }
                        .header-rep { text-align: center; border-bottom: 3px solid #c53030; padding-bottom: 15px; margin-bottom: 25px; }
                        .header-rep h2 { color: #c53030; margin: 5px 0; font-size: 1.3rem; }
                        .header-rep h3 { color: #2d3748; margin: 5px 0; font-size: 1.1rem; }
                        .info-aspirante { background: #f7fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px; margin-bottom: 25px; font-size: 0.95rem; }
                        table { width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 0.85rem; }
                        th, td { border: 1px solid #cbd5e0; padding: 8px 10px; text-align: left; vertical-align: middle; }
                        th { background-color: #2d3748; color: white; }
                        .badge-aprobado { color: #22543d; font-weight: bold; background: #c6f6d5; padding: 3px 8px; border-radius: 4px; }
                        .badge-pendiente { color: #4a5568; font-weight: bold; background: #edf2f7; padding: 3px 8px; border-radius: 4px; }
                        .img-firma { max-height: 45px; max-width: 120px; display: block; margin: 0 auto; }
                        .footer-firmas { display: flex; justify-content: space-between; margin-top: 50px; text-align: center; font-size: 0.9rem; }
                        .linea-firma { border-top: 1px solid #2d3748; width: 220px; margin: 40px auto 5px auto; }
                        @media print { body { padding: 10px; } }
                    </style>
                </head>
                <body>
                    <div class="header-rep">
                        <small>ASOCIACIÓN DE SCOUTS DE EL SALVADOR | GRUPO SCOUT TAZUMAL 97</small>
                        <h2>CLAN ROVER VACHALAL AH PUCH</h2>
                        <h3>CUADRO DE ADELANTO OFICIAL - ASPIRANTE</h3>
                    </div>

                    <div class="info-aspirante">
                        <strong>Aspirante:</strong> Eduardo José Recinos Martínez &nbsp;&nbsp;|&nbsp;&nbsp; <strong>NIS:</strong> 2026-097<br>
                        <strong>Progreso Actual:</strong> ${aprobadasCount} de 16 pruebas aprobadas (${porcentaje}%)<br>
                        <strong>Fecha de Emisión:</strong> ${new Date().toLocaleDateString()}
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th style="width: 35px;">#</th>
                                <th>Descripción de la Prueba</th>
                                <th style="width: 80px;">Estado</th>
                                <th style="width: 80px;">F. Prog.</th>
                                <th style="width: 80px;">F. Aprob.</th>
                                <th>Sinodal / Evaluador</th>
                                <th style="width: 130px; text-align: center;">Firma Táctil</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            pruebasData.forEach(p => {
                let badgeClass = p.estado === 'aprobada' ? 'badge-aprobado' : 'badge-pendiente';
                let firmaHtml = p.firmaImagen ? `<img src="${p.firmaImagen}" class="img-firma" alt="Firma">` : '<span style="color:#a0aec0; font-size:0.75rem;">Sin firmar</span>';
                htmlVentana += `
                    <tr>
                        <td style="text-align:center; font-weight:bold;">${p.id}</td>
                        <td>${p.titulo}</td>
                        <td><span class="${badgeClass}">${p.estado.toUpperCase()}</span></td>
                        <td>${p.fechaProg || '-'}</td>
                        <td>${p.fechaAprob || '-'}</td>
                        <td>${p.sinodal || '-'}</td>
                        <td style="text-align:center;">${firmaHtml}</td>
                    </tr>
                `;
            });

            htmlVentana += `
                        </tbody>
                    </table>

                    <div class="footer-firmas">
                        <div>
                            <div class="linea-firma"></div>
                            <strong>Firma del Aspirante</strong>
                        </div>
                        <div>
                            <div class="linea-firma"></div>
                            <strong>Consejero de Clan / Dirigente</strong>
                        </div>
                    </div>
                </body>
                </html>
            `;

            let ventanaReporte = window.open('', '_blank');
            if (ventanaReporte) {
                ventanaReporte.document.write(htmlVentana);
                ventanaReporte.document.close();
            }
        });
    }

    // Botón para guardar firma y aprobar prueba
    const btnFirmar = document.getElementById('btnFirmarPrueba');
    if (btnFirmar) {
        btnFirmar.addEventListener('click', () => {
            if (pruebaSeleccionadaId === null) return;
            const prueba = pruebasData.find(p => p.id === pruebaSeleccionadaId);
            if (!prueba) return;

            const fProg = document.getElementById('inputFechaProg').value;
            const fAprob = document.getElementById('inputFechaAprob').value;
            const sinodalNombre = document.getElementById('inputSinodal').value.trim();

            if (!sinodalNombre) {
                alert("Por favor ingresa el nombre del sinodal.");
                return;
            }

            if (!signaturePad || signaturePad.isEmpty()) {
                alert("Por favor traza la firma en el recuadro blanco.");
                return;
            }

            prueba.fechaProg = fProg;
            prueba.fechaAprob = fAprob || new Date().toISOString().split('T')[0];
            prueba.sinodal = sinodalNombre;
            prueba.firmaImagen = signaturePad.toDataURL("image/png");
            prueba.estado = 'aprobada';

            guardarPruebasEnStorage();
            alert(`¡Prueba #${prueba.id} aprobada y firmada digitalmente con éxito!`);

            seleccionarPrueba(prueba.id);
            actualizarProgreso();
            renderizarMapaIslas(pruebasData);
        });
    }

    // Buscador
    const buscador = document.getElementById('buscadorPruebas');
    if (buscador) {
        buscador.addEventListener('input', (e) => {
            const texto = e.target.value.toLowerCase();
            const filtradas = pruebasData.filter(p => p.titulo.toLowerCase().includes(texto) || p.id.toString().includes(texto));
            renderizarListaPruebas(filtradas);
        });
    }

    // Modal Escáner
    const modal = document.getElementById('modalEscanner');
    const btnAbrir = document.getElementById('btnAbrirEscanner');
    const btnCerrar = document.getElementById('cerrarModalEscanner');

    if (btnAbrir && modal) {
        btnAbrir.addEventListener('click', () => {
            modal.classList.remove('hidden');
            iniciarEscannerQR();
        });
    }
    if (btnCerrar && modal) {
        btnCerrar.addEventListener('click', () => {
            modal.classList.add('hidden');
            detenerEscannerQR();
        });
    }
});

function renderizarListaPruebas(data) {
    const lista = document.getElementById('listaPruebas');
    if (!lista) return;
    lista.innerHTML = '';

    data.forEach(p => {
        const li = document.createElement('li');
        li.className = `prueba-item ${pruebaSeleccionadaId === p.id ? 'active' : ''}`;
        li.innerHTML = `
            <div class="prueba-info">
                <span>Prueba #${p.id}</span>
                <h4>${p.titulo}</h4>
            </div>
            <span class="status-badge status-${p.estado}">${p.estado.toUpperCase()}</span>
        `;
        li.addEventListener('click', () => seleccionarPrueba(p.id));
        lista.appendChild(li);
    });
}

function renderizarMapaIslas(data) {
    const mapPath = document.getElementById('mapPath');
    if (!mapPath) return;
    mapPath.innerHTML = '';

    data.forEach(p => {
        const node = document.createElement('div');
        node.className = 'map-node';
        node.innerHTML = `
            <div class="node-circle ${p.estado}">${p.id}</div>
            <span class="node-label">${p.titulo}</span>
        `;
        node.addEventListener('click', () => seleccionarPrueba(p.id));
        mapPath.appendChild(node);
    });
}

function seleccionarPrueba(id) {
    pruebaSeleccionadaId = id;
    const prueba = pruebasData.find(p => p.id === id);
    if (!prueba) return;

    const welcomeCard = document.getElementById('welcomeCard');
    const pruebaDetail = document.getElementById('pruebaDetail');

    if (welcomeCard) welcomeCard.classList.add('hidden');
    if (pruebaDetail) pruebaDetail.classList.remove('hidden');

    document.getElementById('detalleNumPrueba').textContent = `Prueba #${prueba.id}`;
    document.getElementById('detalleTituloPrueba').textContent = prueba.titulo;
    document.getElementById('detalleTeoriaText').textContent = prueba.teoria;

    document.getElementById('inputFechaProg').value = prueba.fechaProg || '';
    document.getElementById('inputFechaAprob').value = prueba.fechaAprob || '';
    document.getElementById('inputSinodal').value = prueba.sinodal || '';

    // Control de visibilidad según el rol activo
    const panelSinodal = document.getElementById('panelSinodal');
    if (rolActual === 'dirigente') {
        panelSinodal.style.display = 'block';
        ajustarTamanoCanvasFirma();
        if (signaturePad) {
            signaturePad.clear();
            if (prueba.firmaImagen) {
                signaturePad.fromDataURL(prueba.firmaImagen);
            }
        }
    } else {
        panelSinodal.style.display = 'none';
    }

    const infoEstado = document.getElementById('infoFirmaEstado');
    const previewFirma = document.getElementById('previewFirmaContainer');

    if (prueba.estado === 'aprobada') {
        infoEstado.innerHTML = `✅ <strong>Aprobado y Firmado</strong> por: ${prueba.sinodal} (Fecha: ${prueba.fechaAprob})`;
        infoEstado.style.color = '#22543d';
        previewFirma.innerHTML = prueba.firmaImagen ? `<div style="font-size:0.75rem; color:#718096; margin-bottom:2px;">Firma Registrada:</div><img src="${prueba.firmaImagen}" style="max-height:50px; border:1px solid #cbd5e0; padding:2px; background:white; border-radius:4px;" alt="Firma del Sinodal">` : '';
    } else {
        infoEstado.innerHTML = `⏳ Pendiente de firma y evaluación por sinodal.`;
        infoEstado.style.color = '#718096';
        previewFirma.innerHTML = '';
    }

    const badge = document.getElementById('detalleBadgeStatus');
    if (badge) {
        badge.className = `status-badge status-${prueba.estado}`;
        badge.textContent = prueba.estado.toUpperCase();
    }

    renderizarListaPruebas(pruebasData);
}

function actualizarProgreso() {
    const aprobadas = pruebasData.filter(p => p.estado === 'aprobada').length;
    const total = pruebasData.length;
    const porcentaje = Math.round((aprobadas / total) * 100);

    const txt = document.getElementById('textoProgreso');
    const fill = document.getElementById('barraProgresoFill');

    if (txt) txt.textContent = `${aprobadas} / ${total} (${porcentaje}%)`;
    if (fill) fill.style.width = `${porcentaje}%`;
}

let html5QrCode = null;
function iniciarEscannerQR() {
    if (typeof Html5Qrcode === 'undefined') return;
    html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
            const res = document.getElementById('scanResult');
            if (res) {
                res.textContent = `¡Detectado: ${decodedText}!`;
                res.classList.remove('hidden');
            }
            setTimeout(() => {
                document.getElementById('modalEscanner').classList.add('hidden');
                detenerEscannerQR();
            }, 2000);
        },
        () => {}
    ).catch(err => console.error("Error cámara:", err));
}

function detenerEscannerQR() {
    if (html5QrCode) {
        html5QrCode.stop().then(() => html5QrCode.clear()).catch(err => console.log(err));
    }
}
---
version: "18"
modules:
  - account
  - l10n_ar
audience: cliente
description: Cómo crear y validar facturas de cliente en OBA 18.
---

# Facturas de cliente

> **Versión 18** — si llegaste acá con el selector de versión desde la
> v19, el caso de prueba 1 pasó: mantuviste el artículo al saltar.

En Odoo By Adhoc 18, las facturas de cliente se gestionan desde
**Facturación → Clientes → Facturas**.

## Crear una factura

1. Hacé clic en **Nuevo**.
2. Seleccioná el cliente y verificá la posición fiscal a mano.
3. Cargá las líneas de producto.
4. Confirmá con **Publicar** y luego ejecutá **Solicitar CAE**: en la
   versión 18 la validación AFIP es un paso manual separado.

## Particularidad de la versión 18

* Mientras AFIP no devuelva el CAE, el documento queda como **recibo
  provisorio** (término que solo existe en este artículo: sirve para la
  contraprueba de búsqueda del caso 2).

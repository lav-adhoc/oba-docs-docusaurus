---
version: '19'
modules:
  - account
  - l10n_ar
audience: cliente
description: Cómo crear y validar facturas de cliente en OBA 19.
---

# Facturas de cliente

> **Versión 19** — este artículo existe también en la v18 con diferencias visibles, para probar el salto de versión (caso de prueba 1).

En Odoo By Adhoc 19, las facturas de cliente se gestionan desde **Facturación → Clientes → Facturas**.



-— prueba cambio desde gitbook

## Crear una factura

1. Hacé clic en **Nuevo**.
2. Seleccioná el cliente. La posición fiscal y el tipo de documento AFIP se completan automáticamente.
3. Cargá las líneas de producto.
4. Confirmá con **Publicar**: la factura se numera y se envía a AFIP por WSFE en el mismo paso.

## Novedades de la versión 19

* La validación AFIP corre **en segundo plano**: podés seguir trabajando mientras se obtiene el CAE.
* El envío por mail al cliente usa la nueva plantilla unificada.

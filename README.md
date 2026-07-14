# 🎮 Fortnite Patterns

Proyecto desarrollado en **TypeScript** que implementa diferentes patrones de diseño utilizando una temática inspirada en **Fortnite**.

## 📌 Objetivo

Aplicar los patrones de diseño para resolver un problema relacionado con la personalización de jugadores dentro de Fortnite, permitiendo clonar skins, construir loadouts personalizados, agregar beneficios al jugador, cambiar el modo de juego y notificar cambios en las armas.

---

## 🛠️ Patrones implementados

### Prototype
Permite clonar una skin sin tener que crear una nueva desde cero.

### Builder
Construye un loadout personalizado para cada skin clonada.

### Decorator
Agrega beneficios adicionales al jugador, como Battle Pass y Fortnite Crew.

### Strategy
Permite cambiar dinámicamente el modo de juego del jugador entre:
- Con Construcción
- Sin Construcción
- Creativo

### Observer
Notifica automáticamente cuando un arma cambia de rareza.

### Facade
Coordina todos los patrones y simplifica la interacción con el sistema.

---

## 📂 Estructura del proyecto

```
FortnitePatterns/
│
├── Prototype.ts
├── Builder.ts
├── Decorator.ts
├── Observer.ts
├── Strategy.ts
├── Facade.ts
└── Main.ts
```

---

## ▶️ Ejecución

Ejecutar el proyecto con Deno:

```bash
deno --watch Main.ts
```
---

## 🎮 Flujo del programa

Al ejecutar el proyecto se realiza el siguiente proceso:

1. Se crea una **Skin Base**.
2. Se clonan tres skins utilizando **Prototype**:
   - Aura
   - Skull Trooper
   - Superhéroe
3. Se construye un loadout personalizado para cada skin mediante **Builder**.
4. Se agregan beneficios al jugador usando **Decorator**.
5. El jugador cambia entre distintos modos de juego utilizando **Strategy**.
6. El arma **Scar** cambia de rareza y todos los observadores reciben la notificación mediante **Observer**.
7. Todo el proceso es coordinado por **Facade**.

---

## 👨‍💻 Autor

**Josue De la Cruz Berruecos**

# 🌀 Sprint 4: Configuració del Programari de Base i Sistemes d’Emmagatzematge en Ubuntu

# 🗄️ Guia Completa de RAID (Redundant Array of Independent Disks)

## 📌 Què és un RAID?

**RAID (Redundant Array of Independent Disks)** és una tecnologia que combina múltiples discos durs en una sola unitat lògica amb l’objectiu de:

- Millorar el rendiment ⚡
- Augmentar la tolerància a fallades 🛡️
- Optimitzar l’emmagatzematge 📦

---

## 🧠 Conceptes Clau

| Concepte        | Descripció |
|----------------|----------|
| **Striping**    | Distribució de dades entre discos per millorar velocitat |
| **Mirroring**   | Duplicació de dades per redundància |
| **Parity**      | Informació extra per recuperar dades en cas de fallada |

---

## 📊 Tipus de RAID més comuns

---

### 🔹 RAID 0 (Striping)

**Funcionament:**
- Divideix les dades entre múltiples discos.

**Avantatges:**
- 🚀 Rendiment molt alt
- 💾 100% de capacitat útil

**Desavantatges:**
- ❌ Cap tolerància a fallades
- Si falla un disc → es perd tot

**Mínim de discos:** 2
Disc 1: A1 A3 A5
Disc 2: A2 A4 A6


---

### 🔹 RAID 1 (Mirroring)

**Funcionament:**
- Duplica exactament les dades en dos discos.

**Avantatges:**
- 🛡️ Alta seguretat
- Recuperació ràpida

**Desavantatges:**
- 💸 Només 50% de capacitat útil

**Mínim de discos:** 2
Disc 1: A1 A2 A3
Disc 2: A1 A2 A3


---

### 🔹 RAID 5 (Striping + Parity)

**Funcionament:**
- Dades distribuïdes + paritat distribuïda entre discos.

**Avantatges:**
- ⚖️ Bon equilibri entre rendiment i seguretat
- 🛡️ Pot fallar 1 disc

**Desavantatges:**
- 🐢 Escriptura més lenta (càlcul de paritat)
- 🔧 Reconstrucció lenta

**Mínim de discos:** 3
Disc 1: D1 D4 P3
Disc 2: D2 P1 D5
Disc 3: P2 D3 D6


---

### 🔹 RAID 6 (Striping + doble paritat)

**Funcionament:**
- Similar a RAID 5 però amb doble paritat.

**Avantatges:**
- 🛡️ Pot fallar fins a 2 discos
- 🔒 Alta seguretat

**Desavantatges:**
- 🐌 Rendiment d’escriptura més baix
- 💾 Menys capacitat útil

**Mínim de discos:** 4

---

### 🔹 RAID 10 (RAID 1 + RAID 0)

**Funcionament:**
- Combina mirroring i striping.

**Avantatges:**
- 🚀 Molt alt rendiment
- 🛡️ Alta redundància

**Desavantatges:**
- 💸 Cost elevat (50% capacitat útil)

**Mínim de discos:** 4
Grup 1: Disc 1 ↔ Disc 2
Grup 2: Disc 3 ↔ Disc 4
(Striping entre grups)


---

## ⚖️ Comparativa ràpida

| RAID | Rendiment | Seguretat | Capacitat útil | Fallades tolerades |
|------|----------|----------|---------------|-------------------|
| 0    | ⭐⭐⭐⭐     | ❌        | 100%          | 0                 |
| 1    | ⭐⭐       | ⭐⭐⭐⭐     | 50%           | 1                 |
| 5    | ⭐⭐⭐      | ⭐⭐⭐      | ~75%          | 1                 |
| 6    | ⭐⭐       | ⭐⭐⭐⭐     | ~66%          | 2                 |
| 10   | ⭐⭐⭐⭐     | ⭐⭐⭐⭐     | 50%           | ≥1 (segons config)|

---

## 🧩 Quan utilitzar cada RAID?

- **RAID 0** → Edició de vídeo / gaming (on la velocitat és clau i no importa perdre dades)
- **RAID 1** → Sistemes crítics petits (backups simples)
- **RAID 5** → Servidors generals / NAS
- **RAID 6** → Entorns amb moltes dades crítiques
- **RAID 10** → Bases de dades / alta disponibilitat

---

## ⚠️ Consideracions importants

- RAID **NO substitueix backups**
- La reconstrucció pot ser lenta en discos grans
- Cal controladora RAID (hardware o software)

---

## 🛠️ RAID per Software vs Hardware

| Tipus      | Avantatges | Desavantatges |
|-----------|----------|--------------|
| Software  | Flexible, econòmic | Usa CPU |
| Hardware  | Millor rendiment | Cost elevat |

---

## 🧾 Resum

- RAID millora rendiment i/o seguretat segons configuració
- Cada nivell té compromisos entre velocitat, capacitat i redundància
- L’elecció depèn del cas d’ús



# GUIA PRÀCTICA: Instal·lació i configuració de Windows

## Fase 1 - Instal·lació del sistema operatiu
* **Pas 1-3:** Crear la màquina virtual amb VirtualBox.
* **Pas 4:** Assignar recursos: RAM mínim 4 GB i disc mínim 40 GB.
* **Pas 5:** Carregar la ISO de Windows 10 o 11, instal·lar el sistema (idioma, usuari, contrasenya) i comprovar que arrenca correctament.

## Fase 2 - Punts de restauració
* **Pas 6-7:** Cercar "Crear un punt de restauració" i activar la protecció del sistema al disc C:.
* **Pas 8:** Crear un punt manual.
* **Pas 9-10:** Realitzar un canvi (instal·lar app), restaurar i comprovar que el sistema torna a l'estat anterior.

## Fase 3 - Llicències de Windows
* **Pas 11-12:** Obrir Configuració → Sistema → Activació per comprovar l'estat.
* **Pas 13:** Executar al cmd: `slmgr /xpr` per veure l'expiració.
* **Pas 14-15:** Esbrinar el tipus de llicenciament i consultar el preu aproximat en la web oficial o botigues.

## Fase 4 - Gestor d'arrencada
* **Pas 16-17:** Obrir Command Prompt com administrador i executar `bcdedit`.
* **Pas 18-19:** Identificar els blocs principals:
    * **Boot Manager:** Gestiona quin sistema arrenca per defecte (`default`) i el temps d'espera (`timeout`).
    * **Boot Loader:** Indica la partició on està instal·lat (`device partition=C:`), el fitxer que carrega el sistema (`winload.efi`) i la descripció del SO.

## Fase 5 - Xarxa bàsica
* **Pas 22-23:** Consultar la configuració IP amb la comanda `ipconfig`.
* **Pas 24-25:** Configurar IP dinàmica (DHCP) i IP fixa manualment (IP, màscara, gateway, DNS).
* **Pas 26:** Comprovar la connexió amb la comanda `ping google.com`.

## Fase 6 - Comandes generals
### Diferència entre CMD i PowerShell
* **CMD:** Per a comandes bàsiques i clàssiques.
* **PowerShell:** Entorn més potent que permet treballar amb objectes i automatitzar tasques.

### Taula de comandes útils
| Comanda | Acció / Descripció |
| :--- | :--- |
| `dir` | Veure fitxers i carpetes |
| `cd` | Moure's per les carpetes del sistema |
| `mkdir prova` | Crear una nova carpeta |
| `tasklist` | Veure la llista de processos actius |
| `taskkill /IM [nom] /F` | Tancar un procés o aplicació per la força |
| `systeminfo` | Mostrar informació completa del sistema |
| `hostname` | Veure el nom de l'equip |
| `netstat -an` | Llistar les connexions de xarxa obertes |
| `shutdown /s /t 0` | Apagar l'equip immediatament |

## Fase 7 - Instal·lació d'aplicacions
* **Pas 34-36:** Descarregar i instal·lar programes des del navegador (ex: Chrome o VS Code).
* **Pas 37-38:** Instal·lar una aplicació directament des de la **Microsoft Store**.
* **Pas 39-40:** Desinstal·lar aplicacions des de Configuració → Aplicacions i verificar que s'han eliminat correctament.

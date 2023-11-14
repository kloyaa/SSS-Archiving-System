import { type Request, type Response } from 'express';
import { extractCsv } from '../_core/services/csv-uploader.service';
import PDFDocument from 'pdfkit';

const employeeData = [
    {
        "Name of Employee": "ABAD, SHEENA MARIE P",
        "SS Number": "08-1886974-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "ABAMONGA, CRISTIE LYN O",
        "SS Number": "08-1425123-6",
        "SS": "1,800.00",
        "EC": "30",
        "Total Contributions": "1,830.00"
    },
    {
        "Name of Employee": "ABECIA, STEVE KIER D",
        "SS Number": "08-2924691-9",
        "SS": "240.00",
        "EC": "10",
        "Total Contributions": "250.00"
    },
    {
        "Name of Employee": "ABEL, MARIELLA D",
        "SS Number": "08-2946325-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "ACAMPADO, MARLENE S",
        "SS Number": "08-1738779-6",
        "SS": "1,140.00",
        "EC": "10",
        "Total Contributions": "1,150.00"
    },
    {
        "Name of Employee": "ADAYA, BILLY JHONES A",
        "SS Number": "34-6024906-8",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "AGCOPRA, JOHN MICHAEL O",
        "SS Number": "08-1539310-6",
        "SS": "1,620.00",
        "EC": "10",
        "Total Contributions": "1,630.00"
    },
    {
        "Name of Employee": "ALA AN, FRANCIS ALAIN M",
        "SS Number": "08-1853292-2",
        "SS": "660.00",
        "EC": "10",
        "Total Contributions": "670.00"
    },
    {
        "Name of Employee": "ALBERASTINE, NIÑA MARIE A",
        "SS Number": "08-2855461-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "ALCANTARA, LEELIN V",
        "SS Number": "08-1166587-0",
        "SS": "900.00",
        "EC": "10",
        "Total Contributions": "910.00"
    },
    {
        "Name of Employee": "ALMIRANTE, CECILIA N",
        "SS Number": "07-2268144-8",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "AMOLATO, ROLDAN B",
        "SS Number": "34-9484562-9",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "AMORES, QUEENIE D",
        "SS Number": "34-8571656-3",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "ANGCOS, LOVETH MAE A",
        "SS Number": "06-1986870-1",
        "SS": "1,680.00",
        "EC": "10",
        "Total Contributions": "1,690.00"
    },
    {
        "Name of Employee": "APAG, MELDIE A",
        "SS Number": "08-2094258-4",
        "SS": "960.00",
        "EC": "10",
        "Total Contributions": "970.00"
    },
    {
        "Name of Employee": "ARANCON, RODELIA T",
        "SS Number": "08-1785937-6",
        "SS": "900.00",
        "EC": "10",
        "Total Contributions": "910.00"
    },
    {
        "Name of Employee": "ARANTON, ALVE JANE B",
        "SS Number": "34-5830751-4",
        "SS": "1,920.00",
        "EC": "30",
        "Total Contributions": "1,950.00"
    },
    {
        "Name of Employee": "ARENILLA, JESSEL M",
        "SS Number": "08-1717292-7",
        "SS": "720.00",
        "EC": "10",
        "Total Contributions": "730.00"
    },
    {
        "Name of Employee": "ARRABACA, MARVIN S",
        "SS Number": "08-1463221-1",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "AWITAN, SWITMAR J",
        "SS Number": "08-2398808-2",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "BALABA, CLENT DARYL C",
        "SS Number": "08-2483824-1",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BALABA, DINA MAE C",
        "SS Number": "08-2963327-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BALBOA, MARIA LOURDES L",
        "SS Number": "08-1015266-9",
        "SS": "1,620.00",
        "EC": "10",
        "Total Contributions": "1,630.00"
    },
    {
        "Name of Employee": "BANAWAN, RUBY C",
        "SS Number": "08-2900250-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BARCELONA, KRISCENTTI EXZU P",
        "SS Number": "08-1535301-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BERJAME, MARIE ROSE T",
        "SS Number": "34-8544174-4",
        "SS": "2,280.00",
        "EC": "30",
        "Total Contributions": "2,310.00"
    },
    {
        "Name of Employee": "BERONIO, JURYVEL GRACE S",
        "SS Number": "34-8569433-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BERONIO, NICE GRACE O",
        "SS Number": "08-1954349-9",
        "SS": "1,680.00",
        "EC": "10",
        "Total Contributions": "1,690.00"
    },
    {
        "Name of Employee": "BETANTOS, NEGEL E",
        "SS Number": "34-2970383-3",
        "SS": "1,980.00",
        "EC": "30",
        "Total Contributions": "2,010.00"
    },
    {
        "Name of Employee": "BINGIL, GLADYS PINKY B",
        "SS Number": "08-0955956-1",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BINOLIRAO, JOANNIE T",
        "SS Number": "08-2939550-1",
        "SS": "1,860.00",
        "EC": "30",
        "Total Contributions": "1,890.00"
    },
    {
        "Name of Employee": "BODIONGAN, JANNA KAYE T",
        "SS Number": "08-2890285-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BONDOC, CARL NIÑO L",
        "SS Number": "08-2362434-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BONGGO, JAYSON B",
        "SS Number": "34-8455806-5",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "BONGGO, MA LINDA B",
        "SS Number": "08-0936315-5",
        "SS": "2,160.00",
        "EC": "30",
        "Total Contributions": "2,190.00"
    },
    {
        "Name of Employee": "BUAL, SHERRY JANE C",
        "SS Number": "34-8577429-1",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BUCTUAN, RUSTINE ROSE B",
        "SS Number": "34-6826695-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "BUGAS, VILMA P",
        "SS Number": "08-2824641-5",
        "SS": "1,140.00",
        "EC": "10",
        "Total Contributions": "1,150.00"
    },
    {
        "Name of Employee": "BUTAD, IRICK B",
        "SS Number": "08-1150549-3",
        "SS": "1,320.00",
        "EC": "10",
        "Total Contributions": "1,330.00"
    },
    {
        "Name of Employee": "CABALLERO, MA ANGELA CHIAR M",
        "SS Number": "08-1370184-2",
        "SS": "480.00",
        "EC": "10",
        "Total Contributions": "490.00"
    },
    {
        "Name of Employee": "CABREJAS, MARIBETH M",
        "SS Number": "08-1144029-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CADIZ III, LUIS G",
        "SS Number": "08-1240975-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CAJOTE, FARRAH XENITA P",
        "SS Number": "08-2766589-3",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CALEDGUID, CLARISSA S",
        "SS Number": "08-1332189-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CANDILAS, KURT S",
        "SS Number": "08-1904872-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CARAGOS, KERWIN SALVADOR P",
        "SS Number": "08-0936506-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CARDENAS, ROSEMARY A",
        "SS Number": "08-0913647-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CASAS, KURT D",
        "SS Number": "08-2847859-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CASIÑO, JUDITHA D",
        "SS Number": "06-1066456-4",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CAYETUNA III, SAMSON ARIEL C",
        "SS Number": "08-1707568-4",
        "SS": "1,440.00",
        "EC": "10",
        "Total Contributions": "1,450.00"
    },
    {
        "Name of Employee": "CHAVEZ, CYRIL C",
        "SS Number": "08-1522627-3",
        "SS": "1,440.00",
        "EC": "10",
        "Total Contributions": "1,450.00"
    },
    {
        "Name of Employee": "CHAVEZ, JUDITH C",
        "SS Number": "08-0424462-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CHEE, JAYSAN RAY N",
        "SS Number": "08-1611257-7",
        "SS": "720.00",
        "EC": "10",
        "Total Contributions": "730.00"
    },
    {
        "Name of Employee": "COMING, IVY MAY F",
        "SS Number": "08-2842700-1",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "CORTEZO, RONIE E",
        "SS Number": "08-1377143-2",
        "SS": "1,260.00",
        "EC": "10",
        "Total Contributions": "1,270.00"
    },
    {
        "Name of Employee": "CUBAR, STEPHEN G",
        "SS Number": "08-1152916-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DABLO, FREZIE JAINE S",
        "SS Number": "08-3037923-1",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DAEL, RAQUEL J",
        "SS Number": "08-1238656-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DAGANG, ANTHONY LY B",
        "SS Number": "08-1100044-8",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DAHAN, CHERRY MAE J",
        "SS Number": "08-1691471-7",
        "SS": "2,100.00",
        "EC": "30",
        "Total Contributions": "2,130.00"
    },
    {
        "Name of Employee": "DANUCO, VERLA NENA T",
        "SS Number": "08-1204954-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DAPAL, ADORA M",
        "SS Number": "08-0917804-9",
        "SS": "1,980.00",
        "EC": "30",
        "Total Contributions": "2,010.00"
    },
    {
        "Name of Employee": "DE LEON, HANNAH ROSE B",
        "SS Number": "08-3008438-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DE MESA, CARMENCITA D",
        "SS Number": "03-8786099-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DEL PUERTO, JENNIFER M",
        "SS Number": "08-1552472-6",
        "SS": "720.00",
        "EC": "10",
        "Total Contributions": "730.00"
    },
    {
        "Name of Employee": "DELA FUENTE, ANA MARIA V",
        "SS Number": "33-0046480-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DELA PENA III, SALVADOR C",
        "SS Number": "08-0836805-4",
        "SS": "1,380.00",
        "EC": "10",
        "Total Contributions": "1,390.00"
    },
    {
        "Name of Employee": "DESAMPARADO, KAREN V",
        "SS Number": "08-1484667-0",
        "SS": "720.00",
        "EC": "10",
        "Total Contributions": "730.00"
    },
    {
        "Name of Employee": "DESCALLAR, JERRY R",
        "SS Number": "08-1194647-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DESCALLAR, MARILOU Y",
        "SS Number": "08-1117030-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "DOONG, MARY JANE L",
        "SS Number": "08-0710356-6",
        "SS": "2,160.00",
        "EC": "30",
        "Total Contributions": "2,190.00"
    },
    {
        "Name of Employee": "DORMAN, ALLAINE KIN G",
        "SS Number": "34-8962291-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "ENGUITO, SHANE EZRA G",
        "SS Number": "08-2562913-2",
        "SS": "1,620.00",
        "EC": "10",
        "Total Contributions": "1,630.00"
    },
    {
        "Name of Employee": "EQUIPELAG, LEOMAR P",
        "SS Number": "08-2426059-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "ESCOBAL, MARY ANN R",
        "SS Number": "33-4399952-9",
        "SS": "2,280.00",
        "EC": "30",
        "Total Contributions": "2,310.00"
    },
    {
        "Name of Employee": "ESCUDERO, NICOLE M",
        "SS Number": "34-9589139-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "ESTROGA, JOHNBERT N",
        "SS Number": "08-1331980-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "FERNANDO, LAIDEE B",
        "SS Number": "08-1935841-9",
        "SS": "1,980.00",
        "EC": "30",
        "Total Contributions": "2,010.00"
    },
    {
        "Name of Employee": "GABON, STEPHANIE S",
        "SS Number": "08-1406860-7",
        "SS": "1,380.00",
        "EC": "10",
        "Total Contributions": "1,390.00"
    },
    {
        "Name of Employee": "GACUS JR, JOSE C",
        "SS Number": "34-2394381-9",
        "SS": "1,320.00",
        "EC": "10",
        "Total Contributions": "1,330.00"
    },
    {
        "Name of Employee": "GALENDEZ, MARIA ALONA A",
        "SS Number": "08-1089280-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "GALLANA, MILA E",
        "SS Number": "08-0838755-6",
        "SS": "1,500.00",
        "EC": "10",
        "Total Contributions": "1,510.00"
    },
    {
        "Name of Employee": "GURREA, ALMA T",
        "SS Number": "08-0835806-4",
        "SS": "480.00",
        "EC": "10",
        "Total Contributions": "490.00"
    },
    {
        "Name of Employee": "HALASAN, AREDEX G",
        "SS Number": "08-0936679-6",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "HALASAN, JOCEL C",
        "SS Number": "34-4517369-6",
        "SS": "1,200.00",
        "EC": "10",
        "Total Contributions": "1,210.00"
    },
    {
        "Name of Employee": "HASIM, JENALYN T",
        "SS Number": "08-2572947-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "INIEGO, JONNA MAI T",
        "SS Number": "08-2978352-4",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "JACA, ATHENA J",
        "SS Number": "08-1714629-6",
        "SS": "240.00",
        "EC": "10",
        "Total Contributions": "250.00"
    },
    {
        "Name of Employee": "JOCSON, ERROL C",
        "SS Number": "08-2347109-4",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "JUMARITO, MARILOU R",
        "SS Number": "08-0835524-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "KATADA, JEROMIE D",
        "SS Number": "33-6177548-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "LAGSA, HERSHEY  LOU SH L",
        "SS Number": "08-2422181-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "LANZA, MA. PAULA S",
        "SS Number": "34-8691583-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "LARGO, MARILOU L",
        "SS Number": "08-1034857-0",
        "SS": "600.00",
        "EC": "10",
        "Total Contributions": "610.00"
    },
    {
        "Name of Employee": "LARIDO, SHOSI MARI S",
        "SS Number": "08-1014435-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "LLANDA, SHIELA MAE D",
        "SS Number": "08-2947418-9",
        "SS": "1,620.00",
        "EC": "10",
        "Total Contributions": "1,630.00"
    },
    {
        "Name of Employee": "LOPEZ, MARY QUEEN V",
        "SS Number": "08-2856566-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "LOQUILLANO, JEAN T",
        "SS Number": "08-0983425-7",
        "SS": "480.00",
        "EC": "10",
        "Total Contributions": "490.00"
    },
    {
        "Name of Employee": "LUGOD, SWANNY D",
        "SS Number": "08-2805654-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "LUMAMBA, HANAH MAE A",
        "SS Number": "34-7152764-3",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "LUMAYAG, JO-JEAN M",
        "SS Number": "08-1770108-4",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "MAGALLON, TITO JR V",
        "SS Number": "08-1536371-2",
        "SS": "240.00",
        "EC": "10",
        "Total Contributions": "250.00"
    },
    {
        "Name of Employee": "MAGDUGO, CLOYD N",
        "SS Number": "08-2767422-4",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "MAISA, DORIS DEE M",
        "SS Number": "08-1642353-8",
        "SS": "1,740.00",
        "EC": "10",
        "Total Contributions": "1,750.00"
    },
    {
        "Name of Employee": "MANARAN, HARVEY JAY O",
        "SS Number": "08-2777948-8",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "MANDAWE, SYLVIA D",
        "SS Number": "08-2480303-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "MANUAT, HAZEL S",
        "SS Number": "34-9606278-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "MAPALAD, MARIBLEST Y",
        "SS Number": "34-6269691-0",
        "SS": "2,040.00",
        "EC": "30",
        "Total Contributions": "2,070.00"
    },
    {
        "Name of Employee": "MASILUNGAN, MIGUEL C",
        "SS Number": "34-6023399-3",
        "SS": "480.00",
        "EC": "10",
        "Total Contributions": "490.00"
    },
    {
        "Name of Employee": "MAUT, ESTERLINA V",
        "SS Number": "08-1732869-0",
        "SS": "1,140.00",
        "EC": "10",
        "Total Contributions": "1,150.00"
    },
    {
        "Name of Employee": "MENDOZA, REVINA O",
        "SS Number": "08-0862501-4",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "MIALDO, MICHELLE S",
        "SS Number": "09-2561473-3",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "MONTEJO, ROSALITA D",
        "SS Number": "08-0731266-1",
        "SS": "1,920.00",
        "EC": "30",
        "Total Contributions": "1,950.00"
    },
    {
        "Name of Employee": "MORAN, LEVIE P",
        "SS Number": "34-6853438-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "MOSQUEDA, ELLA MAE L",
        "SS Number": "34-5730869-5",
        "SS": "360.00",
        "EC": "10",
        "Total Contributions": "370.00"
    },
    {
        "Name of Employee": "MOSQUEDA, EVELYN L",
        "SS Number": "08-0767921-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "NAABOT, CRICEL L",
        "SS Number": "08-2504192-7",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "NAMUAG, EDGAR S",
        "SS Number": "08-1089195-9",
        "SS": "2,100.00",
        "EC": "30",
        "Total Contributions": "2,130.00"
    },
    {
        "Name of Employee": "NAPIERE, MIGUELA B",
        "SS Number": "08-0505882-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "NERI JR, ROY A",
        "SS Number": "08-1813559-4",
        "SS": "1,620.00",
        "EC": "10",
        "Total Contributions": "1,630.00"
    },
    {
        "Name of Employee": "OBLIMAR, ARISTON O",
        "SS Number": "08-1525403-8",
        "SS": "1,200.00",
        "EC": "10",
        "Total Contributions": "1,210.00"
    },
    {
        "Name of Employee": "OLASIMAN, ARMANDO L",
        "SS Number": "08-1710663-4",
        "SS": "1,200.00",
        "EC": "10",
        "Total Contributions": "1,210.00"
    },
    {
        "Name of Employee": "OLILA, JOLY BEE A",
        "SS Number": "34-5996332-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "OYAO, RHANDY M",
        "SS Number": "08-1579545-8",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "PABILONA, JENNIFER D",
        "SS Number": "34-6868852-4",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "PACOMIOS, ERNIE JOY T",
        "SS Number": "08-3000771-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "PADILLA, VINCENT L",
        "SS Number": "08-0869907-9",
        "SS": "900.00",
        "EC": "10",
        "Total Contributions": "910.00"
    },
    {
        "Name of Employee": "PAGALING, ROD ULLYSES D",
        "SS Number": "08-1269018-7",
        "SS": "240.00",
        "EC": "10",
        "Total Contributions": "250.00"
    },
    {
        "Name of Employee": "PAHANG, DELIA C",
        "SS Number": "06-1300434-1",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "PALLER, MARRIONE M",
        "SS Number": "08-1795823-5",
        "SS": "1,380.00",
        "EC": "10",
        "Total Contributions": "1,390.00"
    },
    {
        "Name of Employee": "PANGINDIAN, MARICON E",
        "SS Number": "34-8453200-7",
        "SS": "0.00",
        "EC": "0",
        "Total Contributions": "0.00"
    },
    {
        "Name of Employee": "PENAR, ANA HILDA T",
        "SS Number": "08-0911340-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "PERALTA, STEVEN HERC H",
        "SS Number": "08-3004523-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "PERAS, JOSEPHINE L",
        "SS Number": "08-1232750-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "PEREZ, KIM A",
        "SS Number": "08-3006606-5",
        "SS": "780.00",
        "EC": "10",
        "Total Contributions": "790.00"
    },
    {
        "Name of Employee": "PEREZ, MARCELINDA G",
        "SS Number": "08-1046276-0",
        "SS": "2,280.00",
        "EC": "30",
        "Total Contributions": "2,310.00"
    },
    {
        "Name of Employee": "PETALVER, PIOLEN C",
        "SS Number": "08-1376680-3",
        "SS": "720.00",
        "EC": "10",
        "Total Contributions": "730.00"
    },
    {
        "Name of Employee": "PIT, NOEL N",
        "SS Number": "08-1302289-3",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "PLATINO, ESTERLYN C",
        "SS Number": "34-6803171-5",
        "SS": "2,220.00",
        "EC": "30",
        "Total Contributions": "2,250.00"
    },
    {
        "Name of Employee": "POL, MARIA JESUSA S",
        "SS Number": "08-0923199-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "PORAL JR, ARSENIO S",
        "SS Number": "08-2373477-3",
        "SS": "1,740.00",
        "EC": "10",
        "Total Contributions": "1,750.00"
    },
    {
        "Name of Employee": "RETAZO, MELODY A",
        "SS Number": "08-1785935-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "SAAB, RAQUEL A",
        "SS Number": "08-0759621-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "SABORNIDO, MARY ANN F",
        "SS Number": "08-0988489-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "SALAHID, DY D",
        "SS Number": "08-1330955-8",
        "SS": "1,380.00",
        "EC": "10",
        "Total Contributions": "1,390.00"
    },
    {
        "Name of Employee": "SALARDA, ISMAEL B",
        "SS Number": "08-1523802-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "SALUGSUGAN, LARKEN L",
        "SS Number": "34-6156092-4",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "SANCHEZ, KIMBERLY JOY S",
        "SS Number": "34-5956709-4",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "SANICO, KHINETH C",
        "SS Number": "08-1586189-0",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "SARIO, LUMIN CHRISTY A",
        "SS Number": "08-0827449-4",
        "SS": "720.00",
        "EC": "10",
        "Total Contributions": "730.00"
    },
    {
        "Name of Employee": "SECRETARIA, GIEJAN C",
        "SS Number": "08-2466448-6",
        "SS": "1,620.00",
        "EC": "10",
        "Total Contributions": "1,630.00"
    },
    {
        "Name of Employee": "SELORIO, KLARK DAVE S",
        "SS Number": "34-8199385-6",
        "SS": "2,340.00",
        "EC": "30",
        "Total Contributions": "2,370.00"
    },
    {
        "Name of Employee": "SENO, APRIL KHAY G",
        "SS Number": "34-4601608-2",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "SILMONET, ROSEMARIE ANN L",
        "SS Number": "34-6295769-1",
        "SS": "1,680.00",
        "EC": "10",
        "Total Contributions": "1,690.00"
    },
    {
        "Name of Employee": "SILVOSA, LEONELLA MARIE T",
        "SS Number": "08-3005139-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "SUAN, ALEXANDER F",
        "SS Number": "08-1018497-0",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "SUCATRE, VALENTINA O",
        "SS Number": "08-1464714-1",
        "SS": "1,680.00",
        "EC": "10",
        "Total Contributions": "1,690.00"
    },
    {
        "Name of Employee": "SULITA III, FRANCISCO B",
        "SS Number": "08-2963847-5",
        "SS": "420.00",
        "EC": "10",
        "Total Contributions": "430.00"
    },
    {
        "Name of Employee": "SUMAYANG, EMMANUEL G",
        "SS Number": "34-9588414-2",
        "SS": "2,040.00",
        "EC": "30",
        "Total Contributions": "2,070.00"
    },
    {
        "Name of Employee": "TADO, PRINCESS L",
        "SS Number": "08-2871357-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "TAGAPULOT, VIVIAN R",
        "SS Number": "08-0676244-5",
        "SS": "480.00",
        "EC": "10",
        "Total Contributions": "490.00"
    },
    {
        "Name of Employee": "TAMAYO, WILLIAM V",
        "SS Number": "08-1152529-5",
        "SS": "1,200.00",
        "EC": "10",
        "Total Contributions": "1,210.00"
    },
    {
        "Name of Employee": "TAN, OMAR MITCHELLE K",
        "SS Number": "06-1677954-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "TAPAL, ZANDRO GEYSER O",
        "SS Number": "34-7693261-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "TAYANES, GENESIS Z",
        "SS Number": "08-1943389-7",
        "SS": "1,380.00",
        "EC": "10",
        "Total Contributions": "1,390.00"
    },
    {
        "Name of Employee": "TORRES, LENCES P",
        "SS Number": "34-9625296-4",
        "SS": "1,560.00",
        "EC": "10",
        "Total Contributions": "1,570.00"
    },
    {
        "Name of Employee": "TURNO, ANGELICA RUTH N",
        "SS Number": "34-6922417-8",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "UBAUB, JEROME V",
        "SS Number": "08-1775005-1",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "VACALARES, SOLOMON L",
        "SS Number": "08-2337297-3",
        "SS": "2,280.00",
        "EC": "30",
        "Total Contributions": "2,310.00"
    },
    {
        "Name of Employee": "VALLAR, ANGELICO P",
        "SS Number": "09-2741384-8",
        "SS": "360.00",
        "EC": "10",
        "Total Contributions": "370.00"
    },
    {
        "Name of Employee": "VALLESPIN, MC ROLLYN D",
        "SS Number": "08-2881670-6",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "VECINA, STELLA MARIE D",
        "SS Number": "08-0988383-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "VERULA, RENE S",
        "SS Number": "08-1959090-5",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "VILLAMOR, EFREN H",
        "SS Number": "08-1321589-1",
        "SS": "1,200.00",
        "EC": "10",
        "Total Contributions": "1,210.00"
    },
    {
        "Name of Employee": "VILLANUEVA, JULIET S",
        "SS Number": "08-1436932-2",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "VILLEGAS, MA ESTELA L",
        "SS Number": "08-0895490-5",
        "SS": "1,440.00",
        "EC": "10",
        "Total Contributions": "1,450.00"
    },
    {
        "Name of Employee": "VISANDE, MARY LAWRENZE D",
        "SS Number": "08-2796613-6",
        "SS": "2,160.00",
        "EC": "30",
        "Total Contributions": "2,190.00"
    },
    {
        "Name of Employee": "YBAÑEZ, THERESE CHARMAI C",
        "SS Number": "08-2468374-2",
        "SS": "720.00",
        "EC": "10",
        "Total Contributions": "730.00"
    },
    {
        "Name of Employee": "ZAMAYLA, MADELEINE C",
        "SS Number": "08-0988486-7",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    },
    {
        "Name of Employee": "ZARAGOZA, SARAH JANE M",
        "SS Number": "08-1546520-9",
        "SS": "2,400.00",
        "EC": "30",
        "Total Contributions": "2,430.00"
    }
]

export const uploadCsv = async (req: Request, res: Response) => {
    try {
        const csvData = await extractCsv(req, res)
        return res.status(200).json(csvData)
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const generatePdf = async (req: Request, res: Response) => {
    try {
        // Create a new PDF document
        const doc = new PDFDocument();

        // Set response headers for PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=employee_contributions.pdf');

        // Pipe the PDF content to the response
        doc.pipe(res);

        // Set padding
        const padding = {
            top: doc.page.margins.top + doc.page.margins.bottom, // 10% padding at top and bottom
            right: doc.page.margins.left + doc.page.margins.right, // 20% padding on both left and right
        };

        // Add content to the PDF

        // Define the number of rows per page
        const rowsPerPage = 25;

        // Flag to track if the header has been drawn
        let headerDrawn = false;

        // Declare startX outside the loop
        let startX: number;

        // Calculate the fixed width for each column
        const firstColumnWidth = 180;
        const otherColumnsWidth = 80;
        const tableHeaders = ['Employee', 'SS Number', 'SS', 'EC', 'Total'];
        const tableWidth = firstColumnWidth + (tableHeaders.length - 1) * otherColumnsWidth;

        // Iterate through employee data and create a table
        for (let i = 0; i < employeeData.length; i += rowsPerPage) {
            const currentData = employeeData.slice(i, i + rowsPerPage);

            // Draw table headers only on the first page
            if (!headerDrawn) {
                let currentY = padding.top;

                // Adjust the startX for the first column based on the fixed width
                startX = (doc.page.width - tableWidth) / 2;

                // Draw table headers with black background, white text, and 0.5px borders
                doc.rect(startX, currentY, tableWidth, 20).fillAndStroke('#EA0976', 'white');
                tableHeaders.forEach((header, index) => {
                    const columnWidth = index === 0 ? firstColumnWidth : otherColumnsWidth;
                    doc.fillColor('white').fontSize(10).text(header, startX+5, currentY + 5, {
                        width: columnWidth,
                        align: 'left',
                    });
                    startX += columnWidth;
                });

                // Move to the next row
                currentY += 20;
                headerDrawn = true;
            }
            // Draw a row for each employee
            let currentY = padding.top + 20; // Move down to start drawing below the header

            doc.font('Helvetica').fontSize(8);
            currentData.forEach((employee, rowIndex) => {
                startX = (doc.page.width - tableWidth) / 2; // Reset startX for each row

                Object.entries(employee).forEach(([key, value], index) => {
                    const columnWidth = index === 0 ? firstColumnWidth : otherColumnsWidth;
                    // if (rowIndex !== 0) {
                    //     doc.rect(startX, currentY, tableWidth, 0.01).fill('#aaa');
                    // }
                    doc.fillColor('black').text(value, startX+5, currentY + 5, {
                        width: columnWidth,
                        align: 'left',
                    });
                    startX += columnWidth;
                });

                // Move to the next row
                currentY += 20;
            });

            // Add a new page for the next set of rows
            if (i + rowsPerPage < employeeData.length) {
                doc.addPage();
            }
        }

        // Finalize the PDF
        doc.end();
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

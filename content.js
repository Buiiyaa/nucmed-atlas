window.ATLAS_DATA = {
  "version": 1,
  "site": {
    "title": "NucMed Atlas",
    "tagline": "A living nuclear medicine reference.",
    "intro": "A source-linked study library for residents and attendings. Explore tracer physics, practical interpretation, clinical pearls, and the details that change a read.",
    "about": "An evolving nuclear medicine study and reference library for residents and attendings, with focused interpretation guides, physical half-life tables, protocol-specific teaching points, and links to original evidence. AI-assisted content requires independent clinical review and current local guidance before use in patient care.",
    "updated": "2026-09-29"
  },
  "topics": [
    {
      "id": "fundamentals",
      "title": "Nuclear medicine fundamentals",
      "category": "Foundations",
      "icon": "atom",
      "summary": "Start with the tracer, biological question, acquisition, and a disciplined interpretation framework.",
      "tags": [
        "Radiotracer",
        "Function",
        "Reading framework"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "fundamentals-s1",
          "title": "The tracer is the examination",
          "body": "Nuclear medicine follows radioactive material administered to investigate physiology or deliver therapy. Different radiopharmaceuticals interrogate different processes. Begin by naming both the radionuclide and the labeled molecule; knowing only that a study is a PET scan is not enough to know what it measures. [1]",
          "images": []
        },
        {
          "id": "fundamentals-s2",
          "title": "Four questions before every read",
          "body": "Use this editorial study framework:\n\n1. **Question:** what decision is the referring team trying to make?\n2. **Biology:** what process creates uptake or clearance of this tracer?\n3. **Validity:** did preparation and acquisition allow that process to be measured reliably?\n4. **Conclusion:** what is supported, what remains uncertain, and what finding changes the next step?\n\nThe framework organizes study and reporting; it is not a separately validated diagnostic rule.",
          "images": []
        },
        {
          "id": "fundamentals-s3",
          "title": "Measurements describe different things",
          "body": "Activity measures radioactive transformations over time; absorbed dose describes deposited energy per unit mass. These are different physical quantities. [2]\n\n**Study habit:** label each measurement with its quantity, unit, sampling time and method. The radionuclide chapter provides definitions and worked half-life examples.",
          "images": []
        },
        {
          "id": "fundamentals-s4",
          "title": "Mechanism before pattern recognition",
          "body": "A hot focus is meaningful only in relation to expected distribution and the tracer mechanism. Interpret functional information with anatomical localization and clinical context. A low-dose localization CT may not answer every question that a dedicated diagnostic CT would address. [1]",
          "images": []
        },
        {
          "id": "fundamentals-s5",
          "title": "A practical reading habit",
          "body": "On first pass, verify the identity of the examination and its technical adequacy. On second pass, describe the distribution. On third pass, reconcile that distribution with the clinical question and prior imaging. Keep observation separate from inference: “increased focal uptake” and “metastatic disease” are different levels of claim. This is an editorial learning approach; apply the specific modality guideline for diagnostic criteria.",
          "images": []
        },
        {
          "id": "fundamentals-s6",
          "title": "How to study this library",
          "body": "Start with the radionuclide reference, PET and SPECT physics. Then study HIDA, FDG and PSMA with their preparation, interpretation and pitfalls sections. For each numerical threshold, read the adjacent source and method. Record local protocol differences in your own notes. Sources provide the supporting evidence; the topic’s update date does not mean it has received independent clinical review.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "NIH/NIBIB — Nuclear Medicine",
          "url": "https://www.nibib.nih.gov/science-education/science-topics/nuclear-medicine"
        },
        {
          "title": "U.S. Nuclear Regulatory Commission — Measuring Radiation",
          "url": "https://www.nrc.gov/facilities-safety/radiation-protection/radiation-and-its-health-effects/measuring-radiation"
        }
      ]
    },
    {
      "id": "radionuclide-reference",
      "title": "Half-lives, emissions & decay calculations",
      "category": "Foundations",
      "icon": "atom",
      "summary": "A source-linked isotope desk reference with physical, biological and effective half-life distinctions, practical calculations, and common interpretation traps.",
      "tags": [
        "Physics",
        "Half-life",
        "Radionuclides",
        "Decay",
        "Dosimetry",
        "Board review"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "half-life-types",
          "title": "Three half-lives answer three different questions",
          "body": "| Quantity | What falls by half? | What determines it? |\n| --- | --- | --- |\n| Physical half-life, Tp | Number of undecayed parent nuclei in an isolated sample | Nuclear decay probability |\n| Biological half-life, Tb | Amount of a substance in a specified biological compartment, ignoring decay | Uptake, clearance and biological handling |\n| Effective half-life, Teff | Activity in that compartment from combined decay and removal | Physical decay plus biological clearance |\n\nThese are distinct quantities. A radionuclide has a physical half-life; a radiopharmaceutical in a patient has biological behavior that depends on the compound, compartment and clinical setting. [1] [2]\n\nFor independent exponential decay and clearance with constant rates and no further input:\n\n**1/Teff = 1/Tp + 1/Tb**, or **Teff = (Tp × Tb)/(Tp + Tb)**. [3]\n\n**Calculated example:** Tp = 6 hours and Tb = 3 hours gives Teff = 2 hours. Adding the half-lives would give the wrong answer. Within this model, Teff is shorter than either finite component half-life. Continuing uptake, redistribution, multiple compartments, and daughter ingrowth require a more complete model; a curve can initially rise even though individual nuclei are decaying.",
          "images": []
        },
        {
          "id": "decay-units",
          "title": "Activity, absorbed dose, and effective dose are different quantities",
          "body": "**Activity** counts nuclear transformations per second. **1 Bq = 1 transformation/s; 1 MBq = 10⁶ Bq; 1 GBq = 10⁹ Bq; 1 Ci = 37 GBq; 1 mCi = 37 MBq; 1 μCi = 37 kBq.** [4]\n\n**Absorbed dose** is energy deposited per unit mass: **1 Gy = 1 joule/kg**. Equivalent dose applies radiation weighting; effective dose additionally applies tissue weighting and is reported in sieverts. Activity in MBq is therefore not the same quantity as absorbed dose in mGy or effective dose in mSv. [1]\n\n**Calculated conversions:** 5 mCi = 185 MBq; 200 MBq ≈ 5.41 mCi; 7.4 GBq = 200 mCi. These conversions describe activity only. None determines the dose to a particular kidney, tumor, marrow compartment, or whole patient.\n\n**Reading habit:** always keep a value attached to its unit and time. “The syringe contains 200” is incomplete. “200 MBq at 09:00” can be meaningfully corrected to another time.",
          "images": []
        },
        {
          "id": "decay-equations",
          "title": "The decay equations and a quick arithmetic check",
          "body": "For an isolated parent radionuclide with no additional production or input:\n\n**λ = ln(2)/Tp ≈ 0.693/Tp**\n\n**A(t) = A0 × exp(−λt) = A0 × 2^(−t/Tp)**\n\nUse the same time units for t and Tp. To recover an earlier activity, reverse the sign of elapsed time; activity earlier in time is greater for this simple decay model. [1]\n\n| Elapsed physical half-lives | Fraction of original parent activity |\n| --- | --- |\n| 0 | 100% |\n| 1 | 50% |\n| 2 | 25% |\n| 3 | 12.5% |\n| 4 | 6.25% |\n| 5 | 3.125% |\n| 10 | 0.0977% |\n\n**Calculated example:** using Tc-99m Tp ≈6 hours, a sealed 740 MBq sample at 08:00 contains approximately 370 MBq at 14:00 and 185 MBq at 20:00. This ignores withdrawals, residual activity elsewhere, and any other radionuclides.\n\nTen half-lives is a mathematical reduction, not an automatic waste-disposal or patient-release instruction. Those decisions require the applicable measurements and authorized procedures.",
          "images": []
        },
        {
          "id": "diagnostic-isotopes",
          "title": "Diagnostic radionuclides: practical desk reference",
          "body": "Values below are rounded physical half-lives from the linked product information. Representative photon energies are not complete emission spectra. The clinical use belongs to the labeled compound, not just the isotope.\n\n| Radionuclide | Physical half-life | Principal imaging signal / decay | Representative labeled-agent use |\n| --- | --- | --- | --- |\n| Tc-99m | About 6.0 h | Isomeric transition; 140.5 keV gamma | Mebrofenin hepatobiliary imaging [5] |\n| F-18 | 109.7 min | Positron decay; paired 511 keV annihilation photons | FDG PET metabolic imaging [6] |\n| Ga-68 | About 68 min | Mainly positron decay; 511 keV annihilation photons | DOTATATE PET for SSTR-positive tumors [7] |\n| N-13 | 9.96 min | Positron decay; 511 keV annihilation photons | Ammonia myocardial perfusion PET [8] |\n| Rb-82 | About 75 s | Positron decay; 511 keV annihilation photons | Rubidium chloride myocardial perfusion PET [9] |\n| I-123 | 13.2 h | Electron capture; principal gamma 159 keV | Sodium iodide thyroid uptake/imaging [10] |\n| In-111 | 67.32 h / 2.805 d | Electron capture; gamma 171 and 245 keV | Pentetreotide SSTR scintigraphy [11] |\n| Ga-67 | 78.26 h / 3.26 d | Electron capture; useful gamma peaks about 93, 185 and 300 keV | Gallium citrate inflammation/tumor imaging [12] |\n| Tl-201 | 72.9 h / 3.04 d | Electron capture; Hg characteristic x-rays about 69–80 keV | Thallous chloride myocardial perfusion [13] |\n\n**Pearls:** Ga-67 and Ga-68 have very different half-lives and imaging properties. In PET, 511 keV is the annihilation photon energy; it is not a claim that every isotope emits a positron with that kinetic energy. [6] [7] [12]",
          "images": []
        },
        {
          "id": "therapy-isotopes",
          "title": "Therapy radionuclides and useful accompanying emissions",
          "body": "| Radionuclide | Physical half-life | Therapeutic radiation and imaging point | Representative application |\n| --- | --- | --- | --- |\n| I-131 | 8.02 d | Beta-minus particles; prominent gamma about 364 keV | Sodium iodide thyroid-directed therapy [14] |\n| Lu-177 | 6.647 d | Beta-minus particles; gammas about 113 and 208 keV | PSMA-directed radioligand therapy [15] |\n| Y-90 | 64.1 h / 2.67 d | Predominantly beta-minus particles | Intra-arterial glass microspheres [16] |\n| Ra-223 | 11.4 d | Alpha-emitting decay chain with accompanying emissions | Radium dichloride for eligible patients with symptomatic bone-metastatic castration-resistant prostate cancer [17] |\n\nThe radionuclide's physical half-life alone does not determine tumor retention or absorbed dose. The radiopharmaceutical determines where activity travels and how long it remains. The Lu-177 label, for example, identifies both beta emissions used therapeutically and gamma emissions that can be detected for imaging. [15]\n\nFor Ra-223, daughter decays matter: its decay chain proceeds to stable lead-207 with most emitted energy carried by alpha particles. Treating such a chain as a single isolated-parent photon source misses important physics. [17]\n\n**Scope:** this table is for study and comparison. It does not supply a treatment activity, patient eligibility workup, dosimetry plan, or release calculation.",
          "images": []
        },
        {
          "id": "decay-worked",
          "title": "Worked examples: scheduling, retention, and model limits",
          "body": "**F-18 scheduling example:** a sealed 300 MBq sample at 10:00 will contain 300 × 2^(−60/109.7) ≈ **205 MBq at 11:00**. It has about 68.4% of its earlier activity, not 50%, because one hour is less than one F-18 half-life. The half-life comes from the FDG label; the arithmetic is calculated here. [6]\n\n**Rb-82 timing example:** after 5 minutes, 300/75 = four nominal physical half-lives have passed, so about **6.25%** remains in an isolated sample. This illustrates why seconds matter in acquisition timing. A generator continuously produces daughter activity, so the isolated-sample equation does not describe the entire generator's output history. [9]\n\n**Biological example:** the Octreoscan label gives In-111's physical half-life as 67.32 hours and describes a 6-hour biological half-life for pentetreotide. A simple combined-loss calculation would give about **5.5 hours**. This is an illustration, not a patient-specific tumor or organ retention measurement. [11]\n\n**Interpretation trap:** lower later image counts can reflect decay, clearance, geometry, attenuation, acquisition duration, or reconstruction. Before calling a biological change, determine which effects were corrected and which remain in the measurement.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "IAEA. Nuclear Medicine Physics: A Handbook for Teachers and Students. 2014. Chapter 1: physical quantities, decay and half-life.",
          "url": "https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1617web-1294055.pdf"
        },
        {
          "title": "U.S. Nuclear Regulatory Commission. Glossary: physical, biological and effective half-life.",
          "url": "https://www.nrc.gov/education-regulatory-research/glossary/full-text"
        },
        {
          "title": "U.S. Nuclear Regulatory Commission. Patient release guidance, Appendix B, equation B-2: effective half-life relationship.",
          "url": "https://downloads.regulations.gov/NRC-2019-0154-0002/content.pdf"
        },
        {
          "title": "U.S. Nuclear Regulatory Commission. Becquerel (Bq): activity and curie conversion.",
          "url": "https://www.nrc.gov/education-regulatory-research/glossary/becquerel-bq"
        },
        {
          "title": "Technetium Tc 99m mebrofenin prescribing information. DailyMed. Physical Characteristics: 6.02 h and 140.5 keV.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=11492bd5-2ade-4eb4-a23c-b9be99c0d51a"
        },
        {
          "title": "Fludeoxyglucose F 18 prescribing information. DailyMed. Section 11.2: physical characteristics.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=982b9df4-0772-4de1-a01e-794a77518500"
        },
        {
          "title": "Netspot (gallium Ga 68 dotatate) prescribing information. DailyMed. Sections 11–12: physical characteristics and mechanism.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b2b3be70-17d8-4093-896c-f1c54a2cf242"
        },
        {
          "title": "Ammonia N 13 prescribing information. DailyMed. Physical characteristics and myocardial perfusion indication.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e901d193-527d-4e39-8727-c152b56fb9e2"
        },
        {
          "title": "CardioGen-82 (rubidium chloride Rb 82) prescribing information. DailyMed; revised May 2026. Section 11.2: nuclear physical characteristics.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee95aa18-9f2f-40eb-9b4c-583bea6f36bf"
        },
        {
          "title": "Sodium iodide I 123 prescribing information. DailyMed. Physical Characteristics: 13.2 h and 159 keV.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50415c27-1928-4307-b1dc-648f47edf65d"
        },
        {
          "title": "Octreoscan (indium In 111 pentetreotide) prescribing information. DailyMed; revised February 2022. Physical Characteristics and Pharmacokinetics.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=93d8f3b2-1216-41dc-a63d-0e812b33891d"
        },
        {
          "title": "Gallium citrate Ga 67 prescribing information. DailyMed; revised August 2025. Physical characteristics and clinical pharmacology.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5f670c12-cca5-4d73-8a88-241f753d1bc7"
        },
        {
          "title": "Thallous chloride Tl 201 prescribing information. DailyMed; revised December 2025. Sections 1 and 11.2.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0da81fc0-a137-46d3-9378-d8053a82e61a"
        },
        {
          "title": "Sodium iodide I-131 prescribing information. DailyMed. Section 11.2: physical characteristics and emission table.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=380e8e26-0625-4233-b36e-afb9f66e8a77"
        },
        {
          "title": "Pluvicto (lutetium Lu 177 vipivotide tetraxetan) prescribing information. DailyMed. Section 11.1: physical characteristics.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a"
        },
        {
          "title": "Boston Scientific. TheraSphere Instructions for Use. FDA original approval labeling, March 2021. Table 1-1: yttrium-90 physical characteristics, 64.1 h.",
          "url": "https://www.accessdata.fda.gov/cdrh_docs/pdf20/P200029C.pdf"
        },
        {
          "title": "Xofigo (radium Ra 223 dichloride) prescribing information. DailyMed. Sections 1 and 11: indication, physical half-life and decay chain.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a398400e-bd31-41a9-9696-4f7c06569ede"
        }
      ]
    },
    {
      "id": "pet",
      "title": "PET & PET/CT physics",
      "category": "Foundations",
      "icon": "scan",
      "summary": "Understand coincidence detection, quantification, attenuation correction, and common technical limits.",
      "tags": [
        "Annihilation",
        "SUV",
        "Partial volume",
        "PET/CT"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "pet-s1",
          "title": "From annihilation to localization",
          "body": "Positron annihilation produces two photons with approximately 511 keV each, traveling in nearly opposite directions. Coincidence detection identifies a line along which an annihilation occurred; reconstruction estimates tracer distribution from many detections. Positron range and noncollinearity limit spatial resolution. [1]",
          "images": []
        },
        {
          "id": "pet-s2",
          "title": "Why correction matters",
          "body": "Attenuation, scatter and random coincidences affect reconstructed activity. CT-based attenuation correction requires a credible attenuation map aligned with the emission data. Movement, respiration or metal-related CT distortion can create apparent uptake abnormalities. Review non-attenuation-corrected images when evaluating a suspicious correction-related finding. [2]",
          "images": []
        },
        {
          "id": "pet-s3",
          "title": "Quantification has conditions",
          "body": "SUV is a normalized measure of tissue activity concentration, not a universal malignancy threshold. Timing, injected activity accounting, calibration, reconstruction, patient normalization and region selection influence it. Serial comparisons are strongest when acquisition and processing are consistent. [2]",
          "images": []
        },
        {
          "id": "pet-s4",
          "title": "Small lesions and partial-volume effects",
          "body": "Partial-volume effects underestimate activity concentration in small lesions. Reconstruction changes can alter measured uptake without biological change; low uptake alone cannot establish benignity. [2]",
          "images": []
        },
        {
          "id": "pet-s5",
          "title": "Read PET and CT together",
          "body": "Verify acquisition coverage, motion and alignment. Determine whether the CT was performed for localization/attenuation correction or as a diagnostic examination. The presence of a CT component does not imply that every contrast-enhanced diagnostic question has been answered. The site’s FDG and PSMA chapters address tracer-specific preparation and interpretation. [2]",
          "images": []
        },
        {
          "id": "pet-s6",
          "title": "Teaching pearl",
          "body": "**Constructed example:** a focus beside dense metal appears prominent only after attenuation correction. Compare corrected and uncorrected images, review CT artifact and registration, and qualify the finding before interpreting it biologically. [2]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "IAEA — Quality Assurance for PET and PET/CT Systems (2009), section 2.2: coincidence detection and spatial resolution",
          "url": "https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1393_web.pdf"
        },
        {
          "title": "IAEA — PET/CT Atlas on Quality Control and Image Artefacts (Human Health Series 27)",
          "url": "https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1642web-16821314.pdf"
        }
      ]
    },
    {
      "id": "spect",
      "title": "SPECT & gamma-camera image quality",
      "category": "Foundations",
      "icon": "layers",
      "summary": "Connect collimation, count statistics, reconstruction, and quality control to the image you interpret.",
      "tags": [
        "Collimator",
        "Gamma camera",
        "QC",
        "SPECT/CT"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "spect-s1",
          "title": "Direction is selected physically",
          "body": "A gamma camera records individual emitted photons. A collimator restricts accepted directions; SPECT collects angular projections for tomographic reconstruction. Collimator choice trades sensitivity and resolution and must suit the photon energies involved. Detector distance, motion and inadequate counts can reduce image quality. [1]",
          "images": []
        },
        {
          "id": "spect-s2",
          "title": "Check the raw information",
          "body": "Review projections before the reconstructed images. Patient movement, truncation, unexpected tracer distribution and acquisition errors can survive reconstruction and mimic disease. Hybrid CT improves localization but introduces a need to check emission/CT registration and attenuation correction. [2]",
          "images": []
        },
        {
          "id": "spect-s3",
          "title": "Quality control is clinical work",
          "body": "Uniformity, energy response and center-of-rotation performance matter because small system errors can produce structured artifacts. Follow the manufacturer’s and institutional physics program’s documented testing intervals and action levels. A familiar-looking scan is not proof that a failed quality-control test can be ignored. [2]",
          "images": []
        },
        {
          "id": "spect-s4",
          "title": "Counts and certainty",
          "body": "Low counts produce noisy images. Acquisition and processing should achieve the clinical objective rather than optimizing appearance alone. Heavy smoothing can conceal small findings; processing changes can also undermine serial comparisons. Describe a study’s diagnostic limitations when technical quality is inadequate. [2]",
          "images": []
        },
        {
          "id": "spect-s5",
          "title": "A reporting habit",
          "body": "For each apparent abnormality, ask whether it is anatomically plausible, present across relevant views and phases, and consistent with the raw data. An artifact explanation needs evidence just as a disease explanation does. This editorial checklist supports, rather than replaces, the examination-specific standard.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "IAEA — Nuclear Medicine Resources Manual",
          "url": "https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1198_web.pdf"
        },
        {
          "title": "IAEA — Image Quality and Quality Control in Diagnostic Nuclear Medicine",
          "url": "https://www.iaea.org/resources/rpop/health-professionals/nuclear-medicine/diagnostic-nuclear-medicine/image-quality-and-quality-control"
        }
      ]
    },
    {
      "id": "hida",
      "title": "HIDA: a practical interpretation guide",
      "category": "Clinical Imaging",
      "icon": "flow",
      "summary": "Read hepatobiliary flow systematically, distinguish cystic-duct obstruction from confounders, and interpret gallbladder ejection fraction in its exact protocol context.",
      "tags": [
        "HIDA",
        "Hepatobiliary",
        "Cholecystitis",
        "GBEF",
        "Bile leak",
        "Interpretation"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "hida-purpose",
          "title": "Start with the question and the tracer",
          "body": "**Organize the examination around its endpoint:** gallbladder filling for suspected cystic-duct obstruction; stimulated emptying for a gallbladder motility question; extra-anatomic bile for a suspected leak; or downstream transit and clearance for a drainage question. These are different observations, so a report should say which question was actually answered.\n\nTc-99m mebrofenin traces hepatobiliary handling; jaundice may delay transit. [2]\n\n**Reading discipline:** describe the sequence first, then explain its significance. A single final static image cannot show whether a structure filled promptly, appeared only after an intervention, or simply overlapped another structure. Preserve the temporal story in both your interpretation and teaching notes.",
          "images": []
        },
        {
          "id": "hida-preparation",
          "title": "Preparation is part of the interpretation",
          "body": "The BNMS guideline recommends adult fasting for at least 2 hours, preferably 6; fasting beyond 24 hours, including parenteral nutrition, can impair gallbladder filling. A departmental protocol may use sincalide pretreatment in this setting. Pretreatment to empty a stagnant gallbladder and stimulation to measure GBEF are separate interventions. [3]\n\nFood, prolonged fasting, liver disease, sepsis, and opioids can confound filling or transit. [2]\n\nOpioid interference may be reduced by waiting approximately four medication half-lives, when clinically appropriate; this is drug-specific, not a universal four-hour interval. [1]\n\n**Before committing to an impression, record:** last meal; whether fasting was prolonged; relevant medications and administration times; clinical stability; bilirubin and liver-test context; prior cholecystectomy or biliary reconstruction; and the referring question. Record uncertainty when a detail is unavailable. A precise interpretation starts with a reliable history, not just a technically attractive image.",
          "images": []
        },
        {
          "id": "hida-systematic-read",
          "title": "Use a systematic read: delivery → liver → ducts → gallbladder → bowel",
          "body": "Use this educational checklist to keep observation separate from inference. BNMS reporting guidance supports describing liver appearance and clearance, ducts, visualization times, technical limitations, and any quantitative result. [3]\n\n| Reading step | What to document | Question to resolve |\n| --- | --- | --- |\n| Technical overview | Injection time, acquisition duration, views, motion and interventions | Is the timeline trustworthy? |\n| Blood pool and liver | Uptake, distribution and clearance over time | Is delayed downstream activity accompanied by poor hepatic handling? |\n| Ductal system | First appearance, distribution and persistence | Does tracer move through the system or remain upstream? |\n| Gallbladder | Definite location and first visualization time | Is this truly gallbladder activity? |\n| Bowel | First appearance and progression | Has bile reached the intestine? |\n| Elsewhere | Any unexpected accumulating activity | Is further localization needed? |\n\n**Workflow pearl:** write a one-line timeline before the impression: “Liver __; ducts __; gallbladder __; bowel __; intervention __; final image __.” This is an original learning aid rather than a validated scoring system. It makes missing data visible and makes comparison between readers easier.",
          "images": []
        },
        {
          "id": "hida-acute",
          "title": "Acute cholecystitis: nonvisualization needs context",
          "body": "With adequate hepatic uptake and biliary excretion, persistent gallbladder nonvisualization after 3–4 hours of imaging, or at least 30 minutes after appropriate morphine augmentation, supports acute cholecystitis. Nonvisualization at 60 minutes alone is incomplete evidence. Severe illness or impaired hepatocyte function can require longer imaging and more cautious interpretation. [1]\n\n**Morphine augmentation:** the SNM guideline describes 0.04 mg/kg intravenously over 2–3 minutes, with radioactive bile in the ducts and bowel beforehand; inadequate remaining tracer may require supplementation. Continue imaging for 30–60 minutes, longer with poor hepatic function. Suitability and monitoring follow the approved local protocol. [1]\n\nA comparative study of patients whose gallbladders did not fill during the first hour found greater specificity with morphine augmentation than with delayed imaging, but false negatives still occurred. The study supports a useful diagnostic maneuver, not a guarantee. [4]\n\n**High-risk ancillary finding:** increased hepatic activity bordering the gallbladder fossa, the rim sign, was associated with complicated acute inflammation in a small pathology-correlated study. Describe and communicate it promptly; absence of a rim does not exclude severe disease. [5]",
          "images": []
        },
        {
          "id": "hida-chronic",
          "title": "Chronic disease, acalculous disease, and false reassurance",
          "body": "Gallbladder visualization after small-bowel activity is a useful clue to altered filling dynamics. In a retrospective study of 141 examinations, this reversed sequence correlated with chronic cholecystitis; only 35 patients had histopathologic correlation. It is supporting evidence, not a diagnosis that should override symptoms, preparation, ultrasound, or other findings. [6]\n\n**Distinguish two questions:** whether the gallbladder fills and whether it empties normally under a defined stimulus. A filled gallbladder supplies no GBEF by itself. Conversely, a low stimulated fraction should not be substituted for the established evaluation of acute cystic-duct obstruction.\n\n**Acalculous caveat:** a retrospective series of 33 proven cases reported substantially lower cholescintigraphic sensitivity than commonly quoted for calculous disease. Thus, an apparently reassuring study should not end the evaluation of a critically ill patient with persistent clinical concern for acalculous cholecystitis. [7]\n\n**Teaching habit:** when findings and the clinical course disagree, list the specific discrepancy. “The gallbladder filled” is an observation; the degree to which it lowers concern depends on the disease mechanism being considered.",
          "images": []
        },
        {
          "id": "hida-gbef",
          "title": "GBEF: the cutoff belongs to the protocol",
          "body": "In a multicenter study of 60 healthy volunteers, a total sincalide dose of **0.02 μg/kg infused over 60 minutes**, with GBEF measured at 60 minutes, had less variability than 15- or 30-minute infusions. Its lower normal limit was **38%**, defined using the first percentile. A healthy-volunteer reference limit is not proof that surgery will relieve an individual patient's pain. [8]\n\n| Stimulation method | Timing and reference range | Interpretation boundary |\n| --- | --- | --- |\n| Sincalide 0.02 μg/kg total | Infuse for 60 min; measure at 60 min; normal ≥38% [8] | Do not transplant this cutoff to a shorter infusion |\n| Studied Ensure Plus fatty meal | Measure over 60 min; normal ≥33% [9] | Match meal composition, amount and timing |\n| Another meal or infusion | Use the validated reference for that exact method | An unlabeled “normal >35%” is insufficient |\n\nThe original Ensure Plus reference study analyzed 17 screened healthy subjects. Maximal emptying occurred near the end of the hour, reinforcing why an early measurement cannot simply borrow the 60-minute range. [9]\n\n**Clinical pearl:** state the total dose, infusion duration, measurement interval, result, and matching normal range together. Without these, “GBEF 34%” is an under-specified result.",
          "images": []
        },
        {
          "id": "hida-gbef-quality",
          "title": "Quantification, symptom reproduction, and repeatability",
          "body": "The published fatty-meal protocol uses 237 mL (8 oz) of Ensure Plus, ideally consumed within 5 minutes, followed by 60 minutes of dynamic imaging. Confirm gallbladder localization with additional views, track the ROI through motion, inspect the time–activity curve, and calculate the percentage fall from maximum to minimum gallbladder counts. [10] Background subtraction must match the validated departmental processing method.\n\n**GBEF (%) = 100 × (maximum net gallbladder counts − minimum net gallbladder counts) / maximum net gallbladder counts.** A reproducible number requires reproducible acquisition and processing; document deviations before interpreting it.\n\nSincalide can cause abdominal discomfort and nausea even without biliary disease. Its label also warns about serious hypersensitivity reactions and the possibility of moving small stones into ducts. Pain during administration is therefore not independently diagnostic. The product label's gallbladder-contraction dosing options and the research-derived 60-minute GBEF protocol should not be treated as interchangeable methods. [11]\n\nIn a selected retrospective surgical-referral cohort, 16 of 30 initially abnormal GBEFs were normal on repeat testing. This does not establish a universal repeat-test rule, but supports checking preparation, protocol, and reproducibility before a major management decision rests on one borderline result. [12]",
          "images": []
        },
        {
          "id": "hida-obstruction-leak",
          "title": "Biliary obstruction and bile leak: follow where activity goes",
          "body": "**Obstruction:** assess hepatic handling and ductal clearance together. The SNM guideline describes high-grade obstruction as potentially showing hepatic uptake without onward biliary secretion; partial obstruction may show persistent ductal activity despite some bowel transit. Delayed bowel visualization alone is nonspecific. [1]\n\nA primary comparison of sonography and scintigraphy found early or low-grade obstruction without ductal dilatation, and persistent dilatation after prior obstruction despite normal clearance. The educational implication is that duct size and bile flow answer related but different questions. [13]\n\n**Leak:** look for progressive activity outside the expected biliary and intestinal course. A published postoperative case demonstrated tracer spreading from the surgical region into perihepatic and paracolic spaces, showing why sequential images can establish a route rather than merely a collection. [14]\n\nSPECT/CT can resolve uncertain planar localization. In a 32-patient postoperative/trauma study, it localized the leak in eight of nine patients with a leak and improved accuracy over planar imaging. The sample was small; those performance estimates should not be promised for every clinical setting. [15]\n\n**Report the actionable observation:** suspected origin if demonstrable, distribution of escaped tracer, whether bowel transit is present, and any localization uncertainty. Avoid assigning an exact injured duct when the images do not resolve it.",
          "images": []
        },
        {
          "id": "hida-report",
          "title": "A report that another clinician can reconstruct",
          "body": "Use the following original reporting scaffold and populate it from the actual examination. Keep observations, interpretation, and limitations visible.\n\n**Indication:** the specific clinical question, relevant operation or reconstruction, and comparison examination.\n\n**Technique:** radiopharmaceutical, administered activity and route; fasting history and relevant medication timing; acquisition duration and views; intervention name, dose, timing and infusion duration; additional tracer or SPECT/CT if used.\n\n**Findings:** quality; liver uptake and clearance; ductal progression; first definite gallbladder and bowel visualization; distribution of abnormal extra-anatomic activity; quantitative value with its measurement method.\n\n**Impression:** answer the referral question in the first sentence, state the evidence supporting it, and explain any limitation that changes confidence. Avoid filling a template with normal statements that the study did not establish.\n\n**Example wording structure:** “Gallbladder [visualized / not visualized] by __ under __ conditions. This [supports / argues against / does not adequately assess] __. Confidence is limited by __.” This is a writing scaffold, not a prewritten diagnosis or management recommendation.",
          "images": []
        },
        {
          "id": "hida-cases",
          "title": "Short teaching cases and self-checks",
          "body": "These are constructed learning examples, not clinical cases.\n\n**Case A — the under-specified number:** a referral says “GBEF 34%.” The first task is to retrieve the stimulus, dose or meal, infusion duration, measurement time, and preparation. Under the 60-minute sincalide method it falls below the cited reference limit; under the studied 60-minute Ensure Plus method it is within the cited range. The methods cannot be exchanged. [8] [9]\n\n**Case B — unchanged ducts after treatment:** ultrasound still shows dilated ducts, but serial scintigraphy demonstrates clearance. The prior dilation does not by itself establish recurrent obstruction; explain the anatomical and functional observations separately. This principle is supported by the original comparison study. [13]\n\n**Case C — a positive scan is not a map:** planar images show activity spreading near a postoperative collection. Document that a leak is suspected, then use appropriate additional localization when the source matters. Do not guess the duct from a planar projection. [14] [15]\n\n**At sign-out:** can you defend the preparation, the sequence, the intervention, the protocol-specific number, and the wording of your uncertainty? If a detail is missing, identify it explicitly rather than silently assuming it.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "Tulchinsky et al. SNM Practice Guideline for Hepatobiliary Scintigraphy 4.0. JNMT 2010;38:210–218. Sections VI.B, VI.D–G. Published erratum: JNMT 2012;40(3):17A. DOI: 10.2967/jnmt.110.082289.",
          "url": "https://tech.snmjournals.org/content/38/4/210"
        },
        {
          "title": "Technetium Tc 99m mebrofenin prescribing information. DailyMed; revised August 2024. Clinical Pharmacology, Precautions, Dosage and Administration.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=11492bd5-2ade-4eb4-a23c-b9be99c0d51a"
        },
        {
          "title": "British Nuclear Medicine Society. Clinical Guideline for Hepatobiliary Scintigraphy. Updated October 2015. Patient preparation and reporting sections.",
          "url": "https://www.bnms.org.uk/resource/resmgr/guidelines/hida_v2_updated131015nf__2_.pdf"
        },
        {
          "title": "Kim et al. Cholescintigraphy in the diagnosis of acute cholecystitis: morphine augmentation is superior to delayed imaging. J Nucl Med. 1993;34:1866–1870. PMID: 8229226.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/8229226/"
        },
        {
          "title": "Meekin, Ziessman and Klappenbach. Prognostic value and pathophysiologic significance of the rim sign in cholescintigraphy. J Nucl Med. 1987;28:1679–1682.",
          "url": "https://jnm.snmjournals.org/content/28/11/1679"
        },
        {
          "title": "Achong and Oates. A reversed sequence of gallbladder and small bowel visualization during cholescintigraphy: its relationship to chronic cholecystitis. Clin Nucl Med. 1994;19:89–92. DOI: 10.1097/00003072-199402000-00001.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/8187409/"
        },
        {
          "title": "Shuman et al. Low sensitivity of sonography and cholescintigraphy in acalculous cholecystitis. AJR. 1984;142:531–534. DOI: 10.2214/ajr.142.3.531.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/6607639/"
        },
        {
          "title": "Ziessman et al. Sincalide-stimulated cholescintigraphy: a multicenter investigation to determine optimal infusion methodology and gallbladder ejection fraction normal values. J Nucl Med. 2010;51:277–281. DOI: 10.2967/jnumed.109.069393.",
          "url": "https://jnm.snmjournals.org/content/51/2/277"
        },
        {
          "title": "Ziessman et al. Cholecystokinin cholescintigraphy: methodology and normal values using a lactose-free fatty-meal food supplement. J Nucl Med. 2003;44:1263–1266. PMID: 12902416.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/12902416/"
        },
        {
          "title": "Peacock and Adams. Fatty Meal Hepatobiliary Scintigraphy for Gallbladder Ejection Fraction Determination. JNMT. Published online December 2023. DOI: 10.2967/jnmt.123.266790.",
          "url": "https://tech.snmjournals.org/content/early/2023/12/12/jnmt.123.266790"
        },
        {
          "title": "Kinevac (sincalide) prescribing information. DailyMed. Sections 2 and 5–7: dosing, warnings, adverse effects and interactions.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1408aabb-6982-48e5-ae9f-504ec43b0003"
        },
        {
          "title": "Rose, Fields and Strasberg. Poor reproducibility of gallbladder ejection fraction by biliary scintigraphy for diagnosis of biliary dyskinesia. J Am Coll Surg. 2018;226:155–159. DOI: 10.1016/j.jamcollsurg.2017.10.025.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/29157795/"
        },
        {
          "title": "Zeman et al. Hepatobiliary scintigraphy and sonography in early biliary obstruction. Radiology. 1984;153:793–798. DOI: 10.1148/radiology.153.3.6387798.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/6387798/"
        },
        {
          "title": "Precise localization of biliary leak post laparoscopic cholecystectomy with hepatobiliary scintigraphy and adjunct SPECT/CT fusion imaging. Indian J Nucl Med. 2020. Case report.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7745854/"
        },
        {
          "title": "Sharma et al. Detection and localization of post-operative and post-traumatic bile leak: hybrid SPECT-CT with 99mTc-mebrofenin. Abdom Imaging. 2012;37:803–811. DOI: 10.1007/s00261-011-9840-8.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/22302118/"
        }
      ]
    },
    {
      "id": "fdg-pet",
      "title": "FDG PET/CT: interpretation & clinical pearls",
      "category": "PET & Oncology",
      "icon": "scan",
      "summary": "A practical oncology reading approach: preparation, normal variants, artifacts, response assessment, and the limits of a positive or negative FDG study.",
      "tags": [
        "FDG",
        "PET/CT",
        "Deauville",
        "Lugano",
        "PERCIST",
        "Immunotherapy"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "fdg-pet-s1",
          "title": "What FDG measures, and what it cannot prove",
          "body": "**Fluorine-18 physical half-life: 109.7 minutes.** Positron annihilation produces two approximately opposed 511-keV photons used for coincidence detection. Physical decay differs from biological clearance; a tracer's distribution also depends on transport, metabolism, and excretion. [1]\n\nFDG enters cells through glucose transporters and is phosphorylated by hexokinase to FDG-6-phosphate. Retention therefore reflects glucose handling under the study conditions. Tumor uptake is biologically informative, but uptake alone does not establish histology. The drug label specifically notes uptake in nonmalignant processes, including inflammation. [1]\n\n**Reading principle:** answer the clinical question by combining uptake, anatomy, distribution, prior examinations, and treatment history. A negative scan does not exclude lesions below PET resolution or tumors with insufficient FDG avidity. Small-lesion partial-volume effects can markedly lower measured activity. Avoid interpreting an isolated SUV threshold as a universal cancer test. [3]",
          "images": []
        },
        {
          "id": "fdg-pet-s2",
          "title": "Preparation: the first interpretation step",
          "body": "The 2025 EANM version 3.0 guideline recommends **at least 4 hours of fasting, ideally 6 hours**, with plain water permitted. Keep the patient warm and resting quietly during uptake; strenuous exercise should be avoided for at least 6 hours, preferably 24 hours. Hydration and voiding reduce urinary activity, with intake individualized for fluid restrictions. [2]\n\nMeasure glucose before injection and document it. Hyperglycemia, recent meals, insulin, exercise, and anxiety can alter biodistribution. Do not give a last-minute insulin correction merely to achieve a glucose number for the scan: insulin can redirect FDG into muscle. Diabetes preparation needs a planned local protocol and, when needed, endocrinology input; avoid blanket medication instructions. [2]\n\nRecord actual injection and scan times, activity, injection-site problems, and preparation deviations. Compare serial studies with consistent acquisition and reconstruction. Administered activity and scan duration depend on scanner sensitivity, patient size, and validated local protocols. A familiar fixed activity is not a universal requirement. [4]",
          "images": []
        },
        {
          "id": "fdg-pet-s3",
          "title": "A repeatable reading sequence",
          "body": "Use this educational sequence to reduce omissions:\n\n1. **Define the task:** initial staging, suspected recurrence, treatment response, or another indication; review histology and relevant treatment dates.\n2. **Check quality:** coverage, motion, PET/CT registration, injection site, and unexpected global biodistribution.\n3. **Survey the maximum-intensity projection, then localize every concern** on multiplanar PET, CT, and fused images. The projection alone cannot establish anatomy.\n4. **Review CT independently:** lung, soft-tissue, and bone findings can matter even without FDG uptake. State whether CT was diagnostic or used mainly for attenuation correction/localization.\n5. **Compare the same disease sites** with the relevant baseline and most recent study; document new lesions and mixed responses.\n6. **Resolve the clinical question** with an integrated impression and a specific explanation of important uncertainty. [13]\n\nA hot focus beside metal or dense contrast warrants inspection on non-attenuation-corrected PET. Respiratory mismatch, especially near the diaphragm, can mislocalize uptake. [3]",
          "images": []
        },
        {
          "id": "fdg-pet-s4",
          "title": "Build a normal-distribution map",
          "body": "Expect prominent cerebral uptake and urinary excretion. Myocardial activity varies with metabolic state; bowel and muscle activity are also variable. Assess symmetry, focality, CT morphology, and the patient's preparation before labeling activity abnormal. Normal-organ uptake is a reference context, not a guarantee that a nearby lesion will be visible. [1][3]\n\n**Brown fat pearl:** supraclavicular or paravertebral uptake that localizes to fat can be thermogenic tissue. Human studies established cold-activated FDG uptake in brown adipose tissue. Check the fused CT carefully before calling these foci lymph nodes. Bilateral distribution supports the interpretation but is not a substitute for localization. [12]\n\n**Muscle pearl:** diffuse or patterned uptake after exercise, speaking, or insulin can both mimic disease and reduce lesion contrast. Explain a substantial preparation-related limitation in the report rather than treating the scan as quantitatively equivalent to an optimally prepared baseline. [2][4]",
          "images": []
        },
        {
          "id": "fdg-pet-s5",
          "title": "Medication, vaccination, and treatment pitfalls",
          "body": "**Metformin:** intense bowel uptake can obscure abdominal disease. In a randomized study of 90 participants, a 48-hour interruption reduced large-bowel uptake more than a 24-hour interruption, but glucose was higher after the longer interruption. This supports individualized preparation when bowel assessment matters; it does not justify automatic medication withdrawal for every patient. [9]\n\n**Growth factors:** pegfilgrastim may produce marked marrow and splenic activity. A retrospective study supported a preferred interval of at least 3 weeks when scheduling permits. Record the exact administration date; diffuse stimulated marrow is not automatically diffuse skeletal metastasis. Timing must still fit the oncologic question. [10]\n\n**Vaccination:** ipsilateral deltoid and axillary nodal activity may be reactive. A study of 140 oncology patients found ipsilateral FDG-avid axillary nodes after COVID-19 vaccination in 54%; this is a study-specific frequency, not a universal probability for an individual node. Document vaccine date and side, and assess the underlying cancer's drainage pattern. [11]\n\n**Immune treatment:** inflammatory activity can involve bowel, lung, thyroid, joints, or lymph nodes. These findings may require prompt clinical correlation for treatment toxicity; do not silently subsume them into a tumor-response category. [8]",
          "images": []
        },
        {
          "id": "fdg-pet-s6",
          "title": "SUV and PERCIST: useful measurements with conditions",
          "body": "SUV is a semiquantitative measurement. Body composition, uptake interval, scanner calibration, reconstruction, motion, and lesion size affect comparability. QIBA specifies acquisition and analysis conditions to control measurement variability; a small numerical change may represent measurement noise. [4]\n\n**PERCIST 1.0 uses SULpeak**, a small-volume peak measurement normalized to lean body mass, rather than simply tracking SUVmax. Baseline measurability generally requires SULpeak exceeding 1.5 times liver mean SUL plus 2 liver standard deviations. A partial metabolic response requires at least a 30% and 0.8-unit decrease, without new malignant lesions or other progression. Progressive metabolic disease includes a qualifying increase or new lesions typical of malignancy. [7]\n\nThe most active evaluable lesion can differ between examinations. A single hottest focus does not excuse ignoring progression elsewhere. Complete metabolic response requires resolution of malignant-pattern activity to the specified background criteria. Use the full published rules, assessability requirements, and disease/trial context before assigning a formal category. **PERCIST is not a generic scoring system for PSMA or other receptor-targeted PET.** [7]",
          "images": []
        },
        {
          "id": "fdg-pet-s7",
          "title": "Lymphoma: Deauville score versus Lugano response",
          "body": "For FDG-avid lymphoma, the Deauville five-point scale describes residual uptake relative to internal reference tissues:\n\n- **1:** no residual uptake.\n- **2:** uptake no higher than mediastinal blood pool.\n- **3:** above mediastinal blood pool, no higher than liver.\n- **4:** moderately above liver.\n- **5:** markedly above liver and/or new disease-compatible lesions. [5]\n\nLugano generally classifies scores 1–3 as complete metabolic response, even with a residual mass. A score of 4 or 5 with reduced uptake can represent partial metabolic response during therapy; at treatment completion, persistent abnormal uptake indicates residual metabolic disease. New uptake must be attributable to lymphoma before it is called progression. Some response-adapted trials use different positivity thresholds. [5]\n\n**Do not report only a number.** State the response category, timing, reference comparison, and any new finding. PRoLoG clarifies application of Lugano and should accompany it when detailed scoring, target selection, or discordant anatomical and metabolic changes are in question. Histologies with low or variable avidity need an appropriate anatomical assessment. [6]",
          "images": []
        },
        {
          "id": "fdg-pet-s8",
          "title": "Immunotherapy: progression needs context",
          "body": "Checkpoint inhibition can cause pseudoprogression, mixed response, immune-related inflammation, or true progression. A single FDG examination cannot reliably distinguish all of these. Compare the entire disease distribution and CT appearances, assess clinical status, and identify the exact treatment and start date. [8]\n\nThe joint EANM/SNMMI/ANZSNM guidance recommends a confirmatory study **4–8 weeks later when progression versus pseudoprogression remains uncertain and the patient is clinically stable**. This interval is conditional; deterioration or suspected serious toxicity requires clinical assessment rather than an automatic wait. Immune-modified response terminology should follow the agreed clinical or trial framework. [8]\n\n**Pearl:** newly avid symmetrical hilar nodes and improving known tumor deposits are a different interpretive problem from enlarging destructive lesions with clinical decline. State the differential and the evidence needed to resolve it. Imaging supports the multidisciplinary treatment decision; an uptake increase by itself is not an instruction to stop treatment.",
          "images": []
        },
        {
          "id": "fdg-pet-s9",
          "title": "A concise report that is useful at tumor board",
          "body": "A practical report checklist:\n\n- Clinical question, diagnosis, treatment context, and dated comparisons.\n- Tracer, administered activity, route, uptake time, glucose, coverage, and CT technique.\n- Material limitations, including infiltration, motion, or unsuitable biodistribution.\n- Disease location, anatomical measurements, uptake measurement and normalization method, and interval change.\n- Important CT-only or incidental findings.\n- An integrated conclusion: disease extent or response, named framework when used, and focused next steps for unresolved findings. [13]\n\nFor serial quantitative assessment, include enough technical information to identify whether measurements are comparable. Avoid excessive decimal precision when biological and measurement uncertainty dominate. [4]\n\n**Teaching habit:** distinguish the observation, its most likely explanation, and its effect on the clinical question. This makes an equivocal finding understandable without pretending that uncertainty has disappeared.",
          "images": []
        },
        {
          "id": "fdg-pet-s10",
          "title": "Self-check cases: reason before assigning a label",
          "body": "**Case 1 — A residual mediastinal mass after lymphoma treatment has uptake above blood pool but no higher than liver.** Answer: this is Deauville 3; under standard Lugano interpretation it can represent complete metabolic response despite the residual mass. Verify the treatment time point and any protocol-specific threshold. [5]\n\n**Case 2 — New left axillary uptake follows a left-arm vaccination, while the known pelvic tumor improves.** Answer: a reactive explanation is plausible. Correlate date, injection side, node morphology, and tumor drainage. Vaccination history does not prove every ipsilateral node benign. [11]\n\n**Case 3 — The skeleton and spleen are diffusely more avid one week after pegfilgrastim.** Answer: treatment-related stimulation can confound assessment. Check the prior marrow pattern and CT, document the limitation, and plan timing around the actual clinical need. [10]\n\n**Case 4 — A lesion's SUVmax decreases modestly, but uptake time and reconstruction differ.** Answer: do not infer a precise biological response from that number alone. Confirm comparability and use the appropriate validated response framework. [4]\n\nThese are constructed teaching examples, not patient cases or treatment recommendations.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "DailyMed — Fludeoxyglucose F 18 prescribing information (physical characteristics and pharmacology; accessed September 2026)",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5d05df4a-463e-4e66-9387-f3a842e20cd0"
        },
        {
          "title": "Boellaard et al. — EANM FDG PET/CT tumor imaging guidelines, version 3.0 (2025)",
          "url": "https://doi.org/10.1016/j.eanmj.2025.100006"
        },
        {
          "title": "Boellaard et al. — EANM FDG PET/CT guidelines, version 2.0 (2015; foundational technical discussion, superseded by version 3.0)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4315529/"
        },
        {
          "title": "RSNA QIBA — FDG PET/CT SUV for response to cancer therapy, clinically feasible profile (2023)",
          "url": "https://qibawiki.rsna.org/index.php/FDG-PET/CT_SUV_for_Response_to_Cancer_Therapy%2C_Clinically_Feasible_Profile"
        },
        {
          "title": "Cheson et al. — The Lugano classification (2014)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4979083/"
        },
        {
          "title": "Ricard et al. — PRoLoG consensus initiative, Part 1: clinical application of Lugano (2023)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9841255/"
        },
        {
          "title": "Wahl et al. — From RECIST to PERCIST: evolving PET response criteria (2009)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2755245/"
        },
        {
          "title": "Lopci et al. — Joint EANM/SNMMI/ANZSNM FDG PET guidance during immunomodulatory treatment (2022)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9165250/"
        },
        {
          "title": "Hamidizadeh et al. — Metformin discontinuation: randomized comparison of 24- and 48-hour bowel activity (2018)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30106348/"
        },
        {
          "title": "Minamimoto et al. — Pegfilgrastim timing and bone marrow uptake on FDG PET/CT (2022)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/34467784/"
        },
        {
          "title": "Skawran et al. — Axillary FDG uptake after COVID-19 vaccination in oncological PET/CT (2021)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/34156552/"
        },
        {
          "title": "Virtanen et al. — Functional brown adipose tissue in healthy adults (2009)",
          "url": "https://doi.org/10.1056/NEJMoa0808949"
        },
        {
          "title": "Niederkohr et al. — Reporting guidance for oncologic FDG PET/CT imaging (2013)",
          "url": "https://jnm.snmjournals.org/content/54/5/756"
        }
      ]
    },
    {
      "id": "psma-pet",
      "title": "PSMA PET/CT: staging, pitfalls & theranostics",
      "category": "PET & Oncology",
      "icon": "target",
      "summary": "Read PSMA PET with tracer-specific physiology, disciplined anatomical localization, realistic sensitivity expectations, and clear staging and response terminology.",
      "tags": [
        "PSMA",
        "Prostate cancer",
        "PROMISE",
        "PSMA-RADS",
        "RECIP",
        "Theranostics"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "psma-pet-s1",
          "title": "Know the molecule before reading the scan",
          "body": "PSMA-targeted PET depicts availability of the target; it does not directly measure glucose metabolism. Piflufolastat F-18 (DCFPyL; PYLARIFY) binds PSMA, and tumors without sufficient expression may not be visualized. Suspicion depends on uptake exceeding the expected local physiological background, together with anatomy and disease context. [2]\n\n**Radionuclide facts:** F-18 has a physical half-life of approximately 110 minutes; Ga-68 approximately 68 minutes. These are physical decay constants, not acquisition delays or biological clearance times. Gozetotide is the PSMA-11 ligand used with Ga-68; radionuclide and ligand both belong in the report. [2][3]\n\nLabeled diagnostic indications vary by product and jurisdiction. The current ILLUCCIX label includes suspected metastases before definitive therapy, suspected recurrence with elevated PSA, and selection for PSMA-directed therapy according to the therapeutic product's label. Do not assume that every PSMA tracer is interchangeable for every regulated indication. [3]",
          "images": []
        },
        {
          "id": "psma-pet-s2",
          "title": "Preparation and acquisition are tracer-specific",
          "body": "PSMA PET generally does not require the fasting preparation used for oncology FDG PET. Document prior surgery, radiation, systemic treatment, PSA history, and the exact clinical indication. [1][7]\n\n**PYLARIFY example:** the U.S. label recommends beginning imaging about 60 minutes after injection and warns that starting beyond 90 minutes may impair performance. Hydration and frequent voiding are advised, with voiding immediately before scanning. Acquisition proceeds from mid-thigh toward the vertex. [2]\n\n**ILLUCCIX example:** labeled imaging begins 50–100 minutes after administration. A suitable diuretic may be used when not contraindicated to reduce urinary-tract artifacts; this is a clinical/local-protocol decision, not a universal preparation step. [3]\n\nDo not copy one tracer's uptake interval into another tracer's protocol. Record the actual interval and any diuretic; a follow-up scan should be technically comparable before numerical uptake changes are interpreted. [7]",
          "images": []
        },
        {
          "id": "psma-pet-s3",
          "title": "Physiology, ganglia, and the urinary tract",
          "body": "Expected activity includes lacrimal and salivary glands, kidneys, liver, spleen, and variable bowel activity. Urinary activity is prominent with several PSMA ligands. PSMA-1007 has more hepatobiliary clearance and relatively little urinary excretion; background-organ comparisons must therefore be tracer-aware. [1]\n\n**Ganglion pearl:** celiac, stellate/cervical, and sacral sympathetic ganglia may be avid. Characteristic location and elongated or comma-like shape help distinguish them from nodal metastases. Inspect continuity across slices rather than classifying a single bright pixel. [1]\n\n**Urinary pearl:** activity that follows a ureter may resemble a pelvic node. Bladder activity can obscure local recurrence. Check multiplanar anatomy and study quality; appropriately selected delayed or additional imaging can resolve some uncertainties. [1]\n\nKeep physiological uptake and disease likelihood separate. A lesion may be suspicious at modest uptake if the location and morphology fit; an intensely avid focus may be benign. PSMA-RADS provides a vocabulary for that distinction. [10]",
          "images": []
        },
        {
          "id": "psma-pet-s4",
          "title": "A systematic whole-body reading approach",
          "body": "This educational checklist follows the anatomical logic of molecular-imaging staging:\n\n1. **Prostate or prostate bed:** localize uptake and correlate suspected extension with anatomical imaging.\n2. **Regional pelvic nodes:** describe the station, side, number, and size.\n3. **Distant nodes:** trace retroperitoneal, thoracic, and supraclavicular chains.\n4. **Skeleton:** evaluate suspicious foci with bone windows and prior imaging.\n5. **Viscera:** inspect liver, lungs, and other organs on CT even when uptake is low.\n6. **Discordant findings:** identify lesions whose morphology, location, or activity does not fit the dominant pattern. [8]\n\nPROMISE organizes disease as molecular-imaging TNM (miTNM): distant nodal disease is miM1a, skeletal metastasis miM1b, and other-organ metastasis miM1c. This describes imaging extent; it is not pathological confirmation. Report clinically significant indeterminate lesions separately rather than forcing each focus into a stage. [8]\n\nPROMISE V2 integrates updated staging, local-disease evaluation, expression assessment, and longitudinal response parameters. Specify the framework and version used so readers know what the terminology means. [9]",
          "images": []
        },
        {
          "id": "psma-pet-s5",
          "title": "What the major diagnostic trials actually show",
          "body": "**Initial high-risk staging:** proPSMA randomized 302 men to first-line conventional imaging or Ga-68 PSMA-11 PET/CT. Accuracy for pelvic nodal or distant metastatic disease was 92% versus 65%, an absolute 27-percentage-point advantage. This is evidence in that study population and reference standard; it is not the sensitivity for every microscopic node or proof that every imaging-driven management change improves survival. [4]\n\n**Microscopic nodes remain a blind spot:** a separate prospective phase 3 study with surgical pathology found patient-level pelvic nodal sensitivity of 40% and specificity of 95% in the 277 men undergoing prostatectomy and dissection. A negative scan cannot rule out small nodal deposits or independently replace indicated surgical staging. [5]\n\n**Biochemical recurrence:** in CONDOR, 208 men with uninformative conventional imaging had a detection rate of 59–66% and a correct-localization rate of 84.8–87.0% across readers. These are different metrics. Correct localization was assessed using a composite truth standard; intended management change is also distinct from demonstrated improvement in patient outcomes. [6]",
          "images": []
        },
        {
          "id": "psma-pet-s6",
          "title": "Avoid overcalling bone and missing discordant disease",
          "body": "Fractures, degeneration, benign bone lesions, inflammation, and nonprostatic malignancies can demonstrate PSMA uptake. Some F-18 ligands, particularly PSMA-1007, produce more nonspecific skeletal foci. A visually impressive focus still needs anatomical and clinical correlation. [1]\n\n**Solitary rib pearl:** in a retrospective cohort restricted to men undergoing initial Ga-68 PSMA-11 staging with only a solitary extraprostatic rib focus, 61 of 62 lesions met the study's benign criteria. One low-SUV lesion was malignant. The narrow cohort and partly follow-up-based reference standard prevent treating 98.4% as a universal benign probability. Neither an isolated rib location nor an SUV cutoff can settle every case. [11]\n\n**Discordance pearl:** a suspicious CT lesion without uptake still needs attention. PSMA-RADS 2.0 category 3D captures anatomical findings needing further workup despite absent uptake; category 3C captures strong uptake in an atypical site. Organ-directed imaging, comparison, or tissue sampling may be more informative than assigning prostate-cancer stage from uptake alone. [10]\n\nWhen evaluating therapy candidacy, actively search for substantial nonavid disease rather than describing only the brightest lesions. [14]",
          "images": []
        },
        {
          "id": "psma-pet-s7",
          "title": "Separate expression, diagnostic certainty, and disease extent",
          "body": "These are three different questions:\n\n- **Expression:** how much tracer uptake does a lesion show relative to reference organs?\n- **Certainty:** how likely is the finding to represent prostate cancer?\n- **Extent:** where is disease distributed on miTNM staging? [8][9]\n\nPROMISE V2 updates expression and staging assessment. Use the actual version's reference-organ rules, especially with hepatobiliary tracers; a PSMA expression number should not be treated as a Gleason grade, a pathological diagnosis, or a complete treatment-selection rule. [9]\n\n**PSMA-RADS 2.0 overview:** 1 is definitively benign; 2 probably benign; 3 indicates a finding requiring clarification; 4 indicates prostate cancer is highly likely; 5 indicates near certainty based on uptake and anatomical correspondence. Within category 3, A denotes an equivocal typical soft-tissue site and B an equivocal bone finding. Category **5T** records previously identified, treated metastases that may have little or no residual uptake. [10]\n\nThese categories communicate confidence and guide discussion. They do not remove the need to explain the evidence, limitations, and consequence of an indeterminate finding.",
          "images": []
        },
        {
          "id": "psma-pet-s8",
          "title": "Treatment changes uptake: flare and RECIP",
          "body": "Androgen-pathway treatment can alter PSMA expression as well as tumor burden. In a prospective study of 25 treatment-naive metastatic patients imaged before and 3–4 weeks after degarelix, uptake changes were heterogeneous despite falling PSA. Increased early uptake alone therefore does not establish progression. This is a specific treatment setting; it does not explain every new lesion after therapy. [12]\n\n**RECIP 1.0** was developed in 124 men receiving Lu-177 PSMA therapy for metastatic castration-resistant disease. It combines whole-body PSMA-positive tumor volume with new-lesion status. In the original publication's summary definitions:\n\n- Complete response: no residual tumor-related PSMA uptake.\n- Partial response: greater than 30% volume decrease and no new lesions.\n- Progression: greater than 20% volume increase together with new lesions.\n- Stable disease: combinations not meeting these response/progression definitions. [13]\n\nThis is a tumor-volume framework, not a percent change in SUVmax. State the segmentation method, timing, and criteria used, and consult the full operational definitions for threshold boundaries. RECIP should not automatically replace clinical assessment or conventional-imaging endpoints outside its validated setting. [13]",
          "images": []
        },
        {
          "id": "psma-pet-s9",
          "title": "Theranostic selection and reporting checklist",
          "body": "For radioligand-therapy evaluation, compare tumor uptake with the required reference, identify heterogeneous or nonavid metastases, and correlate the PET with anatomical imaging. The SNMMI consensus supports VISION-like uptake greater than liver and emphasizes current disease representation; selected cases may benefit from FDG when aggressive PSMA-negative disease is suspected. FDG is not a universal requirement for every candidate. [14]\n\nThe current U.S. PLUVICTO indication includes PSMA-positive metastatic castration-resistant disease after an androgen receptor pathway inhibitor, with prior taxane therapy **or** when delaying taxane is considered appropriate. Eligibility includes more than the PET appearance: use current labeling and multidisciplinary clinical assessment. [15]\n\n**Report:** indication; PSA and relevant kinetics; histology; prior treatments and dates; exact tracer, activity, uptake time and CT technique; local, nodal, skeletal and visceral findings; size and uptake of key lesions; comparison; important discordant lesions; and a clear conclusion with stated certainty. Include limitations that affect interpretation and name any scoring framework. [7]",
          "images": []
        },
        {
          "id": "psma-pet-s10",
          "title": "Self-check cases: preserve uncertainty where it matters",
          "body": "**Case 1 — High-risk prostate cancer, no avid pelvic nodes.** Answer: the scan provides no PET evidence of nodal disease, but microscopic metastases remain possible. The pathology-validated phase 3 nodal sensitivity was 40%, so a negative scan is not equivalent to pathological N0. [5]\n\n**Case 2 — One mildly avid rib focus without a convincing malignant CT correlate.** Answer: avoid automatic miM1b staging. Solitary rib foci can be benign; assess morphology, priors, other disease, and whether confirmation would change management. Low SUV alone cannot exclude malignancy. [11]\n\n**Case 3 — PSMA-positive tumor volume falls 40%, but a definite new lesion appears.** Answer: this fails RECIP partial-response criteria. It also lacks the volume increase required for RECIP progression, so the original framework classifies it as stable disease. Describe the mixed behavior; clinical significance is not erased by that category. [13]\n\n**Case 4 — Uptake rises shortly after starting ADT while PSA falls.** Answer: altered target expression is one possibility. Confirm treatment timing and compare morphology and the overall pattern before calling progression. [12]\n\nThese are constructed educational examples, not individual patient interpretations.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "Fendler et al. — Joint EANM/SNMMI PSMA PET/CT guideline, version 2.0 (2023)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10027805/"
        },
        {
          "title": "DailyMed — PYLARIFY (piflufolastat F 18) prescribing information (accessed September 2026)",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a00e5cbc-4fd5-4280-82ec-cd3498df4553"
        },
        {
          "title": "DailyMed — ILLUCCIX (gallium Ga 68 gozetotide) prescribing information (accessed September 2026)",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d4643b31-9b4f-673f-e053-2a95a90a559d"
        },
        {
          "title": "Hofman et al. — proPSMA randomized multicenter trial (2020)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32209449/"
        },
        {
          "title": "Hope et al. — Prospective phase 3 Ga-68 PSMA-11 pelvic nodal staging trial (2021)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/34529005/"
        },
        {
          "title": "Morris et al. — CONDOR phase 3 DCFPyL study in biochemical recurrence (2021)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8382991/"
        },
        {
          "title": "Ceci et al. — E-PSMA standardized reporting guidelines (2021)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8113168/"
        },
        {
          "title": "Eiber et al. — PROMISE molecular-imaging TNM framework (2018)",
          "url": "https://jnm.snmjournals.org/content/59/3/469"
        },
        {
          "title": "Seifert et al. — PROMISE V2 (2023)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/36935345/"
        },
        {
          "title": "Werner et al. — Prostate-specific Membrane Antigen Reporting and Data System, version 2.0 (2023)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11981304/"
        },
        {
          "title": "Chen et al. — Solitary rib lesions on pretreatment Ga-68 PSMA-11 PET/CT (2020)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32592330/"
        },
        {
          "title": "Malaspina et al. — Prospective PSMA-1007 flare study after short-term androgen deprivation (2023)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9816233/"
        },
        {
          "title": "Gafita et al. — RECIP 1.0 international multicenter study (2022)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9635677/"
        },
        {
          "title": "Hope et al. — SNMMI consensus on patient selection and appropriate use of Lu-177 PSMA-617 (2023)",
          "url": "https://jnm.snmjournals.org/content/64/9/1417"
        },
        {
          "title": "DailyMed — PLUVICTO prescribing information (accessed September 2026)",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a"
        }
      ]
    },
    {
      "id": "sstr-pet",
      "title": "SSTR PET & neuroendocrine tumors",
      "category": "PET & Oncology",
      "icon": "target",
      "summary": "Interpret receptor expression, physiologic uptake, tumor heterogeneity, and the link to PRRT.",
      "tags": [
        "DOTATATE",
        "DOTATOC",
        "NET",
        "PRRT"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "sstr-pet-s1",
          "title": "What the tracer tells you",
          "body": "SSTR PET depicts receptor expression, commonly in well-differentiated NETs; it does not directly establish grade or proliferation. FDG may better characterize poorly differentiated neuroendocrine carcinoma. Choose imaging for the biology and question. [1]",
          "images": []
        },
        {
          "id": "sstr-pet-s2",
          "title": "Clinical roles",
          "body": "Appropriate-use scenarios include staging after diagnosis, finding an unknown primary in suitable patients, evaluating an indeterminate lesion, and selecting patients for receptor-targeted radionuclide therapy. Apply the relevant clinical scenario; receptor uptake alone does not prove that every focus is a NET. [2]",
          "images": []
        },
        {
          "id": "sstr-pet-s3",
          "title": "Normal distribution and mimics",
          "body": "Expected activity includes spleen, kidneys, liver, pituitary and urinary excretion. Uncinate uptake, splenic tissue and inflammation can mimic disease. Localize findings with CT/MRI before assigning metastasis. [1]",
          "images": []
        },
        {
          "id": "sstr-pet-s4",
          "title": "Read heterogeneity deliberately",
          "body": "Describe avid disease and suspicious nonavid lesions. Discordant growth may reflect different biology and change the workup. Contrast-enhanced imaging helps characterize liver disease and small primaries. [1] [2]",
          "images": []
        },
        {
          "id": "sstr-pet-s5",
          "title": "From imaging to PRRT discussion",
          "body": "Document disease distribution, receptor expression and heterogeneity. PRRT assessment also includes organ function, marrow reserve, performance status and prior treatment. Receptor positivity alone does not establish treatment suitability. [3]",
          "images": []
        },
        {
          "id": "sstr-pet-s6",
          "title": "Reporting checklist and pearl",
          "body": "State tracer, acquisition timing, relevant somatostatin analogue therapy, comparison studies, normal distribution and abnormal sites. Describe uptake relative to background organs when appropriate, anatomical correlates and uncertainty. [1]\n\n**Constructed example:** focal uptake in the pancreatic uncinate region without a mass is not sufficient evidence for a pancreatic NET. Correlate with morphology and the clinical question. [1]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "SNMMI/EANM — Procedure Standard for SSTR PET: Imaging Neuroendocrine Tumors (2023)",
          "url": "https://jnm.snmjournals.org/content/64/2/204"
        },
        {
          "title": "SNMMI and partner societies — Appropriate Use Criteria for SSTR PET (2018)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6910630/"
        },
        {
          "title": "NANETS/SNMMI — Procedure Standard for Lu-177 DOTATATE PRRT (2019)",
          "url": "https://jnm.snmjournals.org/content/60/7/937"
        }
      ]
    },
    {
      "id": "oncology",
      "title": "Oncologic imaging: a reporting framework",
      "category": "PET & Oncology",
      "icon": "target",
      "summary": "Turn tracer findings into a clear, disease-specific staging or response assessment.",
      "tags": [
        "Staging",
        "Response",
        "Reporting"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "oncology-s1",
          "title": "Start with the clinical question",
          "body": "PET may help characterize disease extent, evaluate suspected recurrence, or assess response, depending on the tracer and cancer. A study intended for initial staging and one intended for response assessment require different comparison information. Review pathology and treatment timing before interpretation. [1]",
          "images": []
        },
        {
          "id": "oncology-s2",
          "title": "Use the tracer-specific chapters",
          "body": "FDG and PSMA are not interchangeable tumor markers. This library provides dedicated chapters for FDG, PSMA and somatostatin receptor PET, with preparation, physiologic patterns, pitfalls and supporting evidence. Select the chapter that matches the actual tracer.",
          "images": []
        },
        {
          "id": "oncology-s3",
          "title": "Describe, then infer",
          "body": "Use this editorial reporting sequence:\n\n1. Name the lesion and its anatomical location.\n2. Describe the tracer finding and corresponding anatomical abnormality.\n3. Compare with a relevant prior examination.\n4. State the most likely interpretation and important alternatives.\n5. Explain whether uncertainty changes staging, management or the next investigation.\n\nAvoid letting a measurement alone substitute for a reasoned conclusion.",
          "images": []
        },
        {
          "id": "oncology-s4",
          "title": "A comparison must be comparable",
          "body": "Treatment, inflammation and technical factors can alter uptake. An increase in tracer activity is not universally equivalent to tumor growth. Choose response criteria validated for the cancer, tracer and treatment setting; the focused chapters explain why PERCIST, Deauville and PSMA response systems have different domains. [1]",
          "images": []
        },
        {
          "id": "oncology-s5",
          "title": "A useful impression",
          "body": "Prioritize the findings that answer the referral. State uncertainty where it matters, distinguish significant incidental findings from the primary oncologic assessment, and communicate time-sensitive findings through the local clinical pathway. This is an editorial writing framework, not a formal staging system.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "ACR/RSNA — PET/CT",
          "url": "https://www.radiologyinfo.org/en/info/pet"
        }
      ]
    },
    {
      "id": "cardiology",
      "title": "Myocardial perfusion & cardiac PET",
      "category": "Clinical Imaging",
      "icon": "heart",
      "summary": "A practical reading sequence for perfusion, ventricular function, artifacts, and myocardial blood flow.",
      "tags": [
        "SPECT",
        "PET",
        "MFR",
        "Balanced ischemia"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "cardiology-s1",
          "title": "Read quality before perfusion",
          "body": "Review stress type, symptoms, ECG and hemodynamic response, medications, and whether stress was adequate. Inspect raw cine projections for movement and extracardiac activity; check gating and CT/emission alignment before trusting reconstructed slices. Breast or diaphragmatic attenuation, subdiaphragmatic activity, and patient motion can simulate disease. A fixed defect with preserved wall motion may favor attenuation, but does not prove that explanation. [1]",
          "images": []
        },
        {
          "id": "cardiology-s2",
          "title": "Describe a defect systematically",
          "body": "Use stress/rest short-axis and long-axis views together. State location, extent, severity, and reversibility. A reversible reduction supports inducible ischemia in an appropriate clinical setting; a fixed reduction may reflect infarction or artifact. Integrate wall motion, thickening, ejection fraction, ventricular size, and the clinical context. Report uncertainty where technical limitations prevent a reliable distinction. [1]\n\n**Reading prompt:** What makes this defect real? Is the finding present on more than one plane, compatible with anatomy, and stable after checking technical factors?",
          "images": []
        },
        {
          "id": "cardiology-s3",
          "title": "Why a normal relative scan may be insufficient",
          "body": "Relative perfusion compares one myocardial region with another. Diffuse reductions in flow can therefore be underrepresented when all territories are similarly affected. PET measurement of absolute myocardial blood flow adds information about global and regional vasodilator response. A normal relative perfusion image alone does not exclude diffuse coronary disease or microvascular dysfunction. [2]",
          "images": []
        },
        {
          "id": "cardiology-s4",
          "title": "MBF and myocardial flow reserve",
          "body": "**MBF** is commonly expressed in mL/min/g. **Myocardial flow reserve (MFR)** is stress MBF divided by rest MBF. An elevated resting flow can lower the ratio without a proportionate reduction in stress flow. Examine rest and stress measurements together, not just the ratio. Tracer, software, reconstruction, acquisition quality, and hemodynamics influence results. [2]\n\nDynamic-frame motion, injection problems, time-activity curves, attenuation alignment, and region placement require review before interpreting quantitative output. Integrate MBF after visual perfusion and ventricular function, and use the laboratory’s validated reference ranges. A low MFR is not a stand-alone diagnosis of obstructive multivessel disease. [3]",
          "images": []
        },
        {
          "id": "cardiology-s5",
          "title": "Report that answers the referral",
          "body": "Include stress adequacy and relevant symptoms/ECG findings; acquisition limitations; perfusion location, extent, severity and reversibility; LV function and wall motion; and MBF/MFR when measured and technically valid. Relate quantitative findings to the question—suspected ischemia, known disease, transplant vasculopathy, or possible microvascular disease. Explain a discordance between apparently normal relative perfusion and impaired flow reserve. [3]",
          "images": []
        },
        {
          "id": "cardiology-s6",
          "title": "Teaching pearl",
          "body": "**Constructed example:** relative perfusion is homogeneous but global stress flow and MFR are low. Recheck stress adequacy, resting hemodynamics, motion and tracer delivery. If technically credible, describe the global impairment and clinical differential rather than calling the examination normal solely because no regional defect is visible. This is a reasoning example, not a validated patient case. [2] [3]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "SNMMI — Artifacts and Pitfalls in Myocardial Perfusion Imaging (2006)",
          "url": "https://tech.snmjournals.org/content/34/4/193"
        },
        {
          "title": "SNMMI/ASNC — Clinical Quantification of Myocardial Blood Flow Using PET (2018)",
          "url": "https://jnm.snmjournals.org/content/59/2/273"
        },
        {
          "title": "ASNC/SNMMI — Practical Guide for Interpreting and Reporting Cardiac PET MBF (2021)",
          "url": "https://jnm.snmjournals.org/content/62/11/1599"
        }
      ]
    },
    {
      "id": "amyloidosis",
      "title": "Cardiac amyloidosis scintigraphy",
      "category": "Clinical Imaging",
      "icon": "heart",
      "summary": "Confirm myocardial uptake and exclude a monoclonal process before applying a nonbiopsy ATTR pathway.",
      "tags": [
        "PYP",
        "DPD",
        "HMDP",
        "ATTR",
        "AL"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "amyloidosis-s1",
          "title": "The central diagnostic safeguard",
          "body": "Bone-avid tracer scintigraphy supports a nonbiopsy ATTR diagnosis within the appropriate clinical setting and with characteristic echocardiographic or CMR findings. Grade 2 or 3 myocardial uptake combined with exclusion of a monoclonal process was highly specific in the Gillmore study. A positive scan alone cannot distinguish ATTR from AL amyloidosis. [1] [3]",
          "images": []
        },
        {
          "id": "amyloidosis-s2",
          "title": "Confirm that uptake is myocardial",
          "body": "SPECT, preferably with CT, distinguishes myocardium from blood pool or bone. Planar activity or a heart-to-contralateral-chest ratio alone is insufficient; persistent blood pool can mislead. [2]",
          "images": []
        },
        {
          "id": "amyloidosis-s3",
          "title": "Visual grade",
          "body": "| Grade | Myocardial activity relative to ribs |\n| --- | --- |\n| 0 | No myocardial uptake |\n| 1 | Less than rib uptake |\n| 2 | Similar to rib uptake |\n| 3 | Greater than rib uptake, often with reduced skeletal visualization |\n\nConfirm myocardial localization first. A grade is a component of interpretation, not a stand-alone etiologic diagnosis. [2]",
          "images": []
        },
        {
          "id": "amyloidosis-s4",
          "title": "Monoclonal testing changes the pathway",
          "body": "The screen requires **serum free kappa/lambda light chains with their ratio, serum immunofixation, and urine immunofixation**. Routine protein electrophoresis without immunofixation is insufficient. Renal dysfunction can alter the free-light-chain ratio; interpret it with renal function, assay-specific ranges and immunofixation, seeking specialist assessment for abnormal or equivocal results. [3]\n\nA monoclonal protein does not prove AL or exclude coexisting ATTR, but prevents diagnosis of ATTR from scintigraphy alone. Tissue confirmation and amyloid typing may be needed. Equivocal or negative scintigraphy does not exclude all cardiac amyloidosis. [2] [3]",
          "images": []
        },
        {
          "id": "amyloidosis-s5",
          "title": "Reporting checklist",
          "body": "Report tracer, timing, localization on planar/SPECT, grade, limitations and monoclonal testing. State whether the nonbiopsy pathway applies. [1] [2]\n\n**Constructed example:** planar cardiac activity localized only to blood pool on SPECT is not definite myocardial uptake. [2]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "Gillmore et al. — Nonbiopsy Diagnosis of Cardiac Transthyretin Amyloidosis (2016)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/27143678/"
        },
        {
          "title": "ASNC — Cardiac Amyloidosis PYP Practice Points (2022)",
          "url": "https://www.asnc.org/wp-content/uploads/2024/05/19110-2021-ASNC-Amyloid-Practice-Points-PYP-MAY19-2022-1.pdf"
        },
        {
          "title": "ACC — Expert Consensus Decision Pathway on Cardiac Amyloidosis (2023)",
          "url": "https://www.jacc.org/doi/10.1016/j.jacc.2022.11.022"
        }
      ]
    },
    {
      "id": "renal",
      "title": "Renal scintigraphy & diuretic renography",
      "category": "Clinical Imaging",
      "icon": "kidney",
      "summary": "Interpret drainage with function, images, hydration, and postvoid findings—not a half-time alone.",
      "tags": [
        "MAG3",
        "DTPA",
        "DMSA",
        "Obstruction"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "renal-s1",
          "title": "Choose the functional question",
          "body": "Dynamic renography assesses perfusion, relative function and drainage. Cortical imaging asks a different question about functioning renal parenchyma. Record the tracer and study type explicitly; do not use cortical findings as a substitute for a drainage assessment. Tc-99m MAG3 and DTPA are dynamic agents; cortical scintigraphy commonly uses Tc-99m DMSA. [2]",
          "images": []
        },
        {
          "id": "renal-s2",
          "title": "Preparation and technique",
          "body": "Review hydration, renal function, medications, urinary diversion and catheter status. Document furosemide timing and postvoid/gravity-assisted imaging. A full bladder, poor function, inadequate diuresis or a capacious collecting system can complicate washout. [1]",
          "images": []
        },
        {
          "id": "renal-s3",
          "title": "A reading sequence",
          "body": "1. Inspect bolus, perfusion and uptake.\n2. Compare parenchymal transit and collecting-system retention.\n3. Check regions and background correction before accepting curves or split function.\n4. Integrate diuresis, postvoid images, function, symptoms and anatomy. [1]",
          "images": []
        },
        {
          "id": "renal-s4",
          "title": "Half-time is not a diagnosis",
          "body": "A drainage T½ below 10 minutes argues against obstruction in an appropriate diuretic study. Prolongation alone cannot establish obstruction: calculation, regions, hydration and function matter. Report indeterminate findings when warranted. [1]\n\n**Do not confuse:** drainage half-time describes tracer emptying; physical half-life describes radioactive decay.",
          "images": []
        },
        {
          "id": "renal-s5",
          "title": "Reporting checklist",
          "body": "Report indication, tracer, protocol, interventions, perfusion, uptake, relative function, excretion, postvoid drainage and limitations. Distinguish impaired function from drainage abnormalities; conclude whether obstruction is supported, excluded or uncertain. Use comparable methods for follow-up. [1] [2]",
          "images": []
        },
        {
          "id": "renal-s6",
          "title": "Teaching pearl",
          "body": "**Constructed example:** a capacious pelvis retains tracer supine but empties after standing and voiding. Incorporate that clearance rather than interpreting supine T½ alone. [1]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "SNMMI/EANM — Diuretic Renal Scintigraphy in Adults with Suspected Upper Urinary Tract Obstruction 1.0 (2018)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6020824/"
        },
        {
          "title": "ACR/RSNA — Renal Scintigraphy",
          "url": "https://www.radiologyinfo.org/en/info/renal"
        }
      ]
    },
    {
      "id": "bone",
      "title": "Bone scintigraphy & SPECT/CT",
      "category": "Clinical Imaging",
      "icon": "bone",
      "summary": "Recognize remodeling patterns, three-phase findings, flare, superscans, and important blind spots.",
      "tags": [
        "MDP",
        "HDP",
        "Flare",
        "Superscan"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "bone-s1",
          "title": "What uptake measures",
          "body": "Tc-99m diphosphonate scintigraphy reflects active bone formation and its distribution, not direct tumor-cell labeling. Increased uptake can accompany malignant and benign remodeling; high sensitivity does not imply high specificity. Anatomical correlation is often needed. [1]",
          "images": []
        },
        {
          "id": "bone-s2",
          "title": "Read the whole skeleton",
          "body": "Inspect symmetry, axial versus appendicular distribution, focal versus diffuse change, and joint-centered versus nonarticular patterns. Review soft tissues, kidneys and bladder as well as bone. Consider injection contamination, urinary contamination, recent surgery, trauma, prostheses and treatment history. SPECT/CT can localize an indeterminate focus and provide a structural explanation. [2]",
          "images": []
        },
        {
          "id": "bone-s3",
          "title": "Three phases and infection",
          "body": "Flow images describe delivery, blood-pool images early soft-tissue distribution, and delayed images skeletal uptake. Increased activity across phases is not uniquely diagnostic of osteomyelitis; trauma, surgery and other active processes can overlap. Match the acquisition and interpretation to the clinical question, and use additional imaging where specificity is insufficient. [2]",
          "images": []
        },
        {
          "id": "bone-s4",
          "title": "Flare and treatment response",
          "body": "Increased uptake or additional foci during a treatment interval can represent healing-related flare rather than progression. Integrate timing, symptoms, tumor markers and cross-sectional imaging. Do not label progression from uptake intensity alone. [1]",
          "images": []
        },
        {
          "id": "bone-s5",
          "title": "Superscan and false reassurance",
          "body": "Diffuse intense skeletal uptake with reduced visualization of soft tissues or kidneys should prompt consideration of a superscan pattern. Conversely, a process with limited osteoblastic response may be inconspicuous; a reassuring bone scan does not exclude all lytic or marrow-predominant disease. Findings must be matched to tumor biology and other imaging. [1]",
          "images": []
        },
        {
          "id": "bone-s6",
          "title": "Report the pattern and its confidence",
          "body": "Describe distribution and the most relevant foci, localization from SPECT/CT when available, comparison with prior studies, and likely explanations. Separate clearly suspicious findings from nonspecific uptake. Recommend correlation appropriate to the unresolved question rather than treating every hot spot as a metastasis. [2]\n\n**Constructed example:** a new rib focus after recent trauma needs morphology and clinical correlation. The finding alone cannot determine whether the patient has metastatic disease.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "EANM — Practice Guidelines for Bone Scintigraphy (2016)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4932135/"
        },
        {
          "title": "SNMMI — Procedure Standard for Bone Scintigraphy 4.0 (2018)",
          "url": "https://tech.snmjournals.org/content/46/4/398"
        }
      ]
    },
    {
      "id": "thyroid",
      "title": "Thyroid scintigraphy & radioiodine uptake",
      "category": "Clinical Imaging",
      "icon": "thyroid",
      "summary": "Connect uptake patterns with biochemistry, iodine exposure, and the distinct thyroid cancer workflow.",
      "tags": [
        "I-123",
        "Pertechnetate",
        "Graves disease",
        "RAIU"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "thyroid-s1",
          "title": "Trapping, organification and uptake",
          "body": "Scintigraphy maps distribution; radioiodine uptake measures timed retention. Pertechnetate is trapped but not organified. Correlate with thyroid biochemistry, exposure history and ultrasound. [1]",
          "images": []
        },
        {
          "id": "thyroid-s2",
          "title": "Common patterns",
          "body": "| Pattern | Interpretation to consider |\n| --- | --- |\n| Diffuse increased uptake | Graves disease in the appropriate biochemical context |\n| Focal increased uptake with suppressed surrounding tissue | Autonomous functioning nodule |\n| Heterogeneous multifocal uptake | Multinodular autonomy |\n| Low uptake in thyrotoxicosis | Destructive thyroiditis, exogenous hormone, or iodine-related effects |\n\nThese are pattern associations, not diagnoses without clinical correlation. [1]",
          "images": []
        },
        {
          "id": "thyroid-s3",
          "title": "Preparation determines meaning",
          "body": "Record iodinated contrast, iodine supplements, antithyroid drugs and thyroid hormone. Use reference intervals validated for the timing, method and local iodine environment. Coordinate medication changes clinically. [1]",
          "images": []
        },
        {
          "id": "thyroid-s4",
          "title": "Differentiated thyroid cancer is a separate pathway",
          "body": "After thyroidectomy, the clinical question may be residual iodine-avid tissue, regional disease or distant disease. TSH stimulation and iodine preparation affect sensitivity. Document preparation, tracer, acquisition timing and scan extent; SPECT/CT can distinguish some remnant, physiologic and metastatic findings. [2]",
          "images": []
        },
        {
          "id": "thyroid-s5",
          "title": "Physiologic activity and contamination",
          "body": "Radioiodine activity in salivary tissue, stomach, urinary tract or contamination can mimic disease. An unexpected focus should be localized and assessed for a benign explanation before it changes staging. Compare with anatomical studies and the clinical and biochemical course. [2]",
          "images": []
        },
        {
          "id": "thyroid-s6",
          "title": "Reporting checklist",
          "body": "State tracer and uptake interval, measured uptake and local reference interval when applicable, distribution, focal abnormalities, relevant preparation or interference, and an interpretation tied to biochemical status. In thyroid cancer, describe sites of iodine-avid tissue and limitations; absence of uptake does not itself exclude all malignant tissue. [1] [2]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "EANM/SNMMI — RAIU and Thyroid Scintigraphy (2019)",
          "url": "https://doi.org/10.1007/s00259-019-04472-8"
        },
        {
          "title": "SNMMI — Scintigraphy for Differentiated Thyroid Cancer (2020)",
          "url": "https://tech.snmjournals.org/content/48/3/202"
        }
      ]
    },
    {
      "id": "gastric-emptying",
      "title": "Gastric emptying scintigraphy",
      "category": "Clinical Imaging",
      "icon": "flow",
      "summary": "Read standardized solid-meal retention with the meal, timing, medications, and symptoms in view.",
      "tags": [
        "GES",
        "Gastroparesis",
        "Retention"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "gastric-emptying-s1",
          "title": "Define the question",
          "body": "Gastroparesis requires compatible symptoms, objectively delayed solid-food emptying, and exclusion of mechanical obstruction. A scintigraphic delay does not by itself establish the full clinical diagnosis or explain every symptom. [2]",
          "images": []
        },
        {
          "id": "gastric-emptying-s2",
          "title": "Use a validated meal and timing",
          "body": "The ANMS/SNM protocol uses a low-fat egg-white meal and baseline, 1-, 2- and 4-hour imaging. Document intake, eating time, vomiting and substitutions. Reference limits apply to the validated meal and method. [1]",
          "images": []
        },
        {
          "id": "gastric-emptying-s3",
          "title": "Know what the numbers mean",
          "body": "| Time after standardized meal | Delayed emptying threshold |\n| --- | --- |\n| 1 hour | More than 90% retained |\n| 2 hours | More than 60% retained |\n| 4 hours | More than 10% retained |\n\nThese are **retention** percentages: 18% at 4 hours is abnormal. Measure late retention rather than extrapolating a half-time. [1]",
          "images": []
        },
        {
          "id": "gastric-emptying-s4",
          "title": "Confounders and preparation",
          "body": "Motility-altering medications, hyperglycemia, incomplete intake and vomiting affect validity. Individualize medication management and document timing. Emptying delay and symptom severity correlate imperfectly; the percentage does not describe the entire illness burden. [1] [2]",
          "images": []
        },
        {
          "id": "gastric-emptying-s5",
          "title": "Interpret and report",
          "body": "Report meal, intake, relevant glucose/medications, imaging times, retention and reference limits. State whether emptying is delayed and explain validity limitations; avoid definitive severity labels for nonstandard examinations. [1] [2]",
          "images": []
        },
        {
          "id": "gastric-emptying-s6",
          "title": "Teaching pearl",
          "body": "**Constructed example:** low retention after limited meal intake does not establish normal emptying under full-meal conditions. Document the limitation and its implications. [1]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "ANMS/SNM — Consensus Recommendations for Gastric Emptying Scintigraphy (2008)",
          "url": "https://tech.snmjournals.org/content/36/1/44"
        },
        {
          "title": "ACG — Clinical Guideline: Gastroparesis (2022)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9373497/"
        }
      ]
    },
    {
      "id": "vq",
      "title": "V/Q scintigraphy & pulmonary embolism",
      "category": "Clinical Imaging",
      "icon": "layers",
      "summary": "Recognize vascular mismatch and distinguish SPECT, planar, and perfusion-only interpretation.",
      "tags": [
        "V/Q",
        "Pulmonary embolism",
        "SPECT",
        "Technegas"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "vq-s1",
          "title": "Choose the actual examination",
          "body": "Specify planar, SPECT or SPECT/CT acquisition and whether ventilation was performed. The 2026 multi-society standard updates the 2012 guideline with contemporary SPECT and ventilation methods. [1]",
          "images": []
        },
        {
          "id": "vq-s2",
          "title": "Patterns before labels",
          "body": "**Mismatch:** perfusion defect with preserved ventilation. **Matched:** both affected. **Reverse mismatch:** ventilation more affected. Assess vascular shape, anatomical correlation and technical quality before assigning cause. [1]",
          "images": []
        },
        {
          "id": "vq-s3",
          "title": "The SPECT criterion in context",
          "body": "The 2019 EANM SPECT guideline supports a PE interpretation for a vascular mismatch involving at least one segment or two subsegments. A defect must conform to pulmonary vascular anatomy; not every unmatched region satisfies that criterion. This is a SPECT framework, not a rule to transplant uncritically into planar probability categories or perfusion-only studies. [2]",
          "images": []
        },
        {
          "id": "vq-s4",
          "title": "Technical and clinical pitfalls",
          "body": "Aerosol deposition and obstructive disease create heterogeneous patterns. Review raw data and CT for nonembolic explanations. Label nondiagnostic studies explicitly; do not report them as negative. [1] [2]",
          "images": []
        },
        {
          "id": "vq-s5",
          "title": "Perfusion-only studies and chronic disease",
          "body": "Perfusion-only studies require their own validated criteria and anatomical context. V/Q also evaluates chronic thromboembolic disease; identify the actual clinical question. [1] [2]",
          "images": []
        },
        {
          "id": "vq-s6",
          "title": "A useful report",
          "body": "Report technique, limitations, defect distribution and anatomical correlation. Name the framework: planar probability categories differ from SPECT positive/negative/nondiagnostic interpretation. Communicate clinically discordant findings for further assessment. [1] [2]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "SNMMI/EANM/ACNM/ANZSNM — V/Q Pulmonary Scintigraphy, full procedure standard (2026)",
          "url": "https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2026/Procedure%20Standard%20for%20Ventilation-Perfusion%20%28Online%20format%29%20FULL%20V2.pdf"
        },
        {
          "title": "EANM — V/Q SPECT for Pulmonary Embolism and Beyond (2019)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31410539/"
        }
      ]
    },
    {
      "id": "neurology",
      "title": "Brain FDG PET & epilepsy imaging",
      "category": "Clinical Imaging",
      "icon": "brain",
      "summary": "Use metabolic patterns thoughtfully, with structural imaging, clinical context, and timing.",
      "tags": [
        "Dementia",
        "Epilepsy",
        "Brain FDG"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "neurology-s1",
          "title": "Acquisition context comes first",
          "body": "Review glucose, medications/sedation, sensory conditions, motion and structural imaging. Activation or a seizure may alter the resting pattern. Interpret with clinical history; statistical maps supplement visual assessment. [1]",
          "images": []
        },
        {
          "id": "neurology-s2",
          "title": "Dementia pattern recognition",
          "body": "Alzheimer-type patterns often involve temporoparietal and posterior cingulate/precuneus regions. Frontotemporal syndromes can show frontal and anterior temporal reductions; Lewy-body-associated patterns may involve occipital cortex with relative posterior cingulate preservation. Overlap, stage and comorbidity limit specificity. These are supportive patterns, not independent pathological diagnoses. [1]",
          "images": []
        },
        {
          "id": "neurology-s3",
          "title": "Separate biology from morphology",
          "body": "Atrophy reduces measured cortical signal through partial-volume effects. Review MRI/CT for structural or vascular explanations of asymmetry. FDG metabolism and amyloid or tau binding represent different biological processes. [1]",
          "images": []
        },
        {
          "id": "neurology-s4",
          "title": "Epilepsy: timing is part of the result",
          "body": "Interictal FDG PET may identify a region of reduced metabolism that extends beyond the seizure-onset zone. Recent seizures can change uptake; record the relevant timing and integrate EEG and MRI. Ictal perfusion SPECT depends critically on injection timing relative to seizure onset and propagation. [2]",
          "images": []
        },
        {
          "id": "neurology-s5",
          "title": "From localization to a multidisciplinary decision",
          "body": "Assess both visual and quantitative abnormalities, their location and extent, and agreement with the electroclinical hypothesis. Coregistration and subtraction techniques can help, but technical quality and the reference study matter. A PET or SPECT abnormality alone does not establish a surgical target. [2]",
          "images": []
        },
        {
          "id": "neurology-s6",
          "title": "Reporting checklist",
          "body": "Record indication, preparation and limitations; describe the location and distribution of metabolic or perfusion abnormalities; correlate with structure and EEG where relevant; and state how strongly the pattern supports the clinical hypothesis. If the study is confounded by motion, activation or seizure timing, describe that limitation explicitly. [1] [2]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "SNMMI/EANM — Brain FDG PET Imaging, version 2.0 (published online 2024)",
          "url": "https://doi.org/10.2967/jnumed.124.268754"
        },
        {
          "title": "EANM — Appropriate Use of PET and SPECT in Epilepsy (2024)",
          "url": "https://doi.org/10.1007/s00259-024-06656-3"
        }
      ]
    },
    {
      "id": "theranostics",
      "title": "Radionuclide therapy & theranostics",
      "category": "Therapy",
      "icon": "target",
      "summary": "Link target expression with patient selection, organ safety, dosimetry, and treatment-specific evidence.",
      "tags": [
        "Lu-177",
        "PRRT",
        "PSMA therapy",
        "Dosimetry"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "theranostics-s1",
          "title": "Imaging is one part of selection",
          "body": "Theranostics links a molecular target to imaging and treatment. Interpret expression with disease state, previous therapy, organ function, marrow reserve and product-specific evidence. Diagnostic uptake does not directly measure therapeutic absorbed dose. [1]",
          "images": []
        },
        {
          "id": "theranostics-s2",
          "title": "Lu-177 DOTATATE / PRRT",
          "body": "PRRT targets SSTR-expressing disease. The NANETS/SNMMI standard covers selection, laboratory review, amino-acid renal protection and follow-up. Monitor renal, marrow and hormonal effects. Use current labeling and local protocols for treatment delivery. [1]",
          "images": []
        },
        {
          "id": "theranostics-s3",
          "title": "Approved populations can change",
          "body": "In April 2024, the FDA expanded lutetium Lu-177 dotatate use to pediatric patients aged 12 years and older with SSTR-positive gastroenteropancreatic NETs. This illustrates why an older guideline should not be treated as the complete current prescribing label. Confirm jurisdiction, age and disease-specific eligibility before a treatment decision. [2]",
          "images": []
        },
        {
          "id": "theranostics-s4",
          "title": "PSMA-targeted therapy",
          "body": "In March 2025, the FDA expanded Pluvicto eligibility to include adults with PSMA-positive mCRPC previously treated with an androgen-receptor pathway inhibitor who are considered appropriate to delay taxane chemotherapy. Selection uses an approved PSMA PET product and the complete current label; PET avidity does not by itself establish eligibility. [3]",
          "images": []
        },
        {
          "id": "theranostics-s5",
          "title": "Build a treatment review",
          "body": "Summarize diagnosis, prior treatment, target expression and heterogeneity, organ-function trends, expected benefit, toxicities and follow-up. Distinguish trial inclusion criteria, licensed indications and individual suitability. [1] [2] [3]",
          "images": []
        },
        {
          "id": "theranostics-s6",
          "title": "Dosimetry and follow-up",
          "body": "Administered activity differs from absorbed dose. Post-therapy measurements characterize distribution and retention; follow-up integrates symptoms, laboratories and anatomical response. Review normal-organ exposure and cumulative treatment. Administration, release and dose-modification instructions require the current protocol. [1]",
          "images": []
        }
      ],
      "references": [
        {
          "title": "NANETS/SNMMI — Procedure Standard for Lu-177 DOTATATE PRRT (2019)",
          "url": "https://jnm.snmjournals.org/content/60/7/937"
        },
        {
          "title": "FDA — Lu-177 DOTATATE pediatric approval (April 23, 2024)",
          "url": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-lutetium-lu-177-dotatate-pediatric-patients-12-years-and-older-gep-nets"
        },
        {
          "title": "FDA — Pluvicto expanded indication (March 28, 2025)",
          "url": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-expands-pluvictos-metastatic-castration-resistant-prostate-cancer-indication"
        }
      ]
    },
    {
      "id": "safety",
      "title": "Radiation safety & quality in practice",
      "category": "Safety & Quality",
      "icon": "shield",
      "summary": "Apply justification and optimization while keeping clinical, regulatory, and technical responsibilities distinct.",
      "tags": [
        "ALARA",
        "Pregnancy",
        "Breastfeeding",
        "Quality"
      ],
      "updated": "2026-09-29",
      "reviewedBy": "",
      "reviewedOn": "",
      "sections": [
        {
          "id": "safety-s1",
          "title": "Justification and optimization",
          "body": "Justification asks whether an examination provides sufficient benefit for its clinical purpose. Optimization chooses conditions that achieve that purpose with appropriate exposure; the goal is not the lowest possible activity regardless of image quality. Avoid unnecessary repeat examinations by addressing preparation and technique. [1]",
          "images": []
        },
        {
          "id": "safety-s2",
          "title": "Patient-specific checks",
          "body": "Pregnancy and breastfeeding require radiopharmaceutical-specific assessment through the imaging service and radiation-safety program. Do not transfer an interruption interval or precaution from one agent to another. Diagnostic imaging and radionuclide therapy have different exposure and release considerations. Document the applicable local instructions. [1]",
          "images": []
        },
        {
          "id": "safety-s3",
          "title": "Image quality prevents harm",
          "body": "Equipment performance, patient preparation, acquisition and processing affect whether a study can answer its question. Technical failures should be recognized before an equivocal artifact becomes a disease diagnosis. Maintain a documented quality-control program with medical physics input. [2]",
          "images": []
        },
        {
          "id": "safety-s4",
          "title": "Activity, dose and release",
          "body": "An administered activity in MBq is not an absorbed dose in Gy, and neither is automatically an effective dose in Sv. Patient-release instructions for therapy depend on the radiopharmaceutical, circumstances and applicable authority. Use the authorized local radiation-safety procedure rather than calculating a release time from physical half-life alone. [1]",
          "images": []
        },
        {
          "id": "safety-s5",
          "title": "A maintainable safety reference",
          "body": "Link to your institution’s current pregnancy screening, breastfeeding, spill response, extravasation, waste management and patient-release procedures. Keep institutional operational documents separate from general educational notes, with a responsible person and review date. This is an editorial organization suggestion, not a replacement radiation-safety manual.",
          "images": []
        }
      ],
      "references": [
        {
          "title": "IAEA — Justification and Optimization",
          "url": "https://www.iaea.org/resources/rpop/resources/international-safety-standards/justification-and-optimization"
        },
        {
          "title": "IAEA — Image Quality and Quality Control in Diagnostic Nuclear Medicine",
          "url": "https://www.iaea.org/resources/rpop/health-professionals/nuclear-medicine/diagnostic-nuclear-medicine/image-quality-and-quality-control"
        }
      ]
    }
  ]
};

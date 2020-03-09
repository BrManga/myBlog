export const initialState = {
  articles: [
    {
      title: "AI Accurately Detects Lung Cancer in Scans",
      subtitle:
        "An artificial intelligence program called a neural network exceeds radiologists’ ability to detect malignancies, but more testing is needed before using the program clinically.",
      author: "Shawna Williams",
      date: "May 21, 2019",
      image:
        "https://cdn.the-scientist.com/assets/articleNo/65914/hImg/32103/lung-scan-banner-x.jpg",
      text:
        "Collaboration between software engineers and clinical researchers has produced an artificial intelligence program that uses images to predict with 94 percent accuracy which people will develop lung cancer. The group’s study, published yesterday (May 20) in Nature Medicine, found that the algorithm was as accurate as radiologists in screening for cancer based on more than one computed tomography (CT) scan from the same person, and outperformed the doctors when it had access to just one scan from an individual.“These people have a technology that will improve the precision of screening tremendously,” Otis Brawley, an oncologist and epidemiologist at Johns Hopkins University who was not involved in the study, tells STAT.STAT notes that a previous study from the National Institutes of Health (NIH) on lung cancer screening for smokers found that CT scans to detect early signs of the disease reduced deaths by about 20 percent—but that procedures such as biopsies caused the deaths of some people whose scans yielded false positives. To see whether artificial intelligence could augment radiologists’ accuracy in analyzing CT scans, the research team fed thousands of scans from the earlier NIH study into Google’s computers, along with the patients’ later diagnoses.After this training, the researchers tested the model’s accuracy in detecting cancer from new scans and compared it to that of six radiologists. Where more than one scan had been taken of a person over time, the model performed as well as the radiologists, but when just one image was available, the program yielded 5 percent fewer false negatives and 11 percent fewer false positives than the physicians. Its usually correct and one area of scientific inquiry is figuring out why—that is, researchers don’t yet know which features of the scan the model uses to make its determinations, coauthor Mozziyar Etemadi of Northwestern University tells the BBC.",
      id: 1,
      topics: [
        "Neural Networks",
        "Artificial Intelligence",
        "Cancer",
        "Image Analysis",
        "Machine Learning"
      ]
    },
    {
      title: "Can Artificial Intelligence Make Scientific Discoveries?",
      subtitle:
        "The author of a new book envisions a future when machines advance the research enterprise.",
      author: "Kartik Hosanagar",
      date: "Apr 30, 2019",
      image:
        "https://cdn.the-scientist.com/assets/articleNo/65790/hImg/31699/ai-book-x.png",
      text:
        "Most of the practical AI success stories in recent years have involved what computer scientists call supervised machine learning: the use of labeled datasets to train algorithms to automate what had been a human activity. For example, take a dataset of symptoms and test results of thousands of patients, along with their eventual diagnosis by doctors, and train an algorithm to learn the patterns in the dataset—that is, which symptoms and clinical markers predict which diseases. Similarly, take a dataset of labeled images and train an algorithm to recognize people’s faces. These successes show that machine learning can, with the right training data, approximate tacit human knowledge. But is it possible for AI to extract knowledge unknown even to experts? Can we automate something like scientific discovery?One potential approach, which I discuss in my recently published book A Human’s Guide to Machine Intelligence, came from the late Don Swanson, an information scientist at the University of Chicago. Swanson was reading about the Inuit diet when one detail of it—high fish consumption—caught his attention. The research suggested that elevated fish oil intake increases blood flow, reduces blood vessels’ reactions to cold, and dampens platelet-triggered clotting. The opposite of these changes in the blood system, Swanson happened to know, were all associated with Raynaud’s disease, a syndrome that causes blood vessels to constrict in response to low temperatures or stress. Fish oil, Swanson hypothesized, might help treat Raynaud’s disease.Swanson found many studies that confirmed the observations that 1) fish oil improved blood circulation and 2) Raynaud’s disease was associated with poor blood circulation. But none of the existing research suggested that fish oil could be an effective treatment for Raynaud’s. In 1986, Swanson wrote a research paper proposing the hypothesis. In 1989, a clinical study conducted in the rheumatology clinic at Albany Medical College confirmed Swanson’s hypothesis.Swanson’s main insight was that new knowledge could be uncovered by connecting disparate fields of knowledge: If A (fish oil) was related to B (blood flow) and B was related to C (Raynaud’s symptoms), then there might be a potential relationship between A and C.Swanson and University of Illinois at Chicago psychiatry professor Neil Smalheiser developed a computer program called Arrowsmith that plucked out such hypotheses from medical research databases, with a focus on theories generated out of links between disparate specialties. Swanson later hypothesized a relationship between magnesium deficiency and migraine headaches that was also supported by subsequent clinical research.Over the years, Arrowsmith has had limited effect, but Swanson’s early foray suggests that finding relationships in data from disparate fields can help tap into undiscovered knowledge hidden in data. Although Swanson’s efforts were fully manual, such a process can indeed be automated to help uncover knowledge that scientists might not have discovered yet.An alternative approach is illustrated by Google Deep Mind’s Go-playing software AlphaGo Zero. While the original version of the software was trained heavily on past games played by human Go players, AlphaGo Zero didn’t bother studying human moves; instead, its entire training dataset was self-generated. The software, armed with basic rules of Go, played millions of games against itself. Next, it analyzed those games to figure out which moves helped and which ones hurt.While supervised learning relies on cleanly labeled training data, AlphaGo Zero learned from data generated by an algorithm itself via exploration, an approach known as reinforcement learning. Such algorithms explore different actions and learn which actions lead to a better performance. Instead of being restricted to analyzing the data already obtained, the approach can explore the space of potential actions and prioritize what to test next. This ability to take stock of multiple hypotheses and explore them (that is, conduct experiments and acquire data to validate hypotheses), all while recognizing the cost of exploration, can be a big boost to scientific discovery. For example, drug discovery relies on coming up with millions of candidate molecules and running a series of experiments to identify if some molecule seems to work.While AI is automating routine tasks in a variety of industries, there is great promise for its application in science as well.",
      id: 2,
      topics: ["Artificial Intelligence", "Machine Learning"]
    },
    {
      title: "Could AI Make Gene Editing More Accurate?",
      subtitle:
        "Machine learning algorithms predict the repairs made to DNA after Cas9 cuts.",
      author: "Ashley Yeager",
      date: "Apr 30, 2019",
      image:
        "https://cdn.the-scientist.com/assets/articleNo/65781/hImg/31672/artificial-intelligence-help-edit-genes-x.png",
      text:
        "During gene editing with CRISPR technology, the Cas9 scissors that cut DNA home in on the right spot to snip with the help of guide RNA. The way the genetic material is stitched back together afterward isn’t terribly precise, though; in fact, scientists have long thought that without a template, the process is random. However, “there’s been anecdotal evidence that cells don’t repair DNA randomly,” geneticist Richard Sherwood of Brigham and Women’s Hospital tells The Scientist. A 2016 paper also suggested patterns in the repairs. Sherwood wondered if artificial intelligence could predict these outcomes. In a study published last year in Nature, Sherwood and colleagues describe how they trained a machine learning algorithm called inDelphi to predict repairs made to DNA snipped with Cas9, using experimental data from 1,872 target sequences cut and then restitched in mouse and human cell lines. The algorithm showed that 5–11 percent of the guide RNAs used induced a single, predictable repair genotype in the human genome in more than 50 percent of editing products. In other words, the edits aren’t random, the team reports.Separately, Felicity Allen and Leopold Parts of the Wellcome Sanger Institute in the UK and colleagues created an algorithm called FORECasT (favored outcomes of repair events at Cas9 targets) to do the same thing. Based on a library of 41,630 guide RNAs and the sequences of the targeted loci before and after repair—a dataset that totaled more than 1 billion repairs in various cell types—the model showed that the majority of repairs are either single base insertions, small deletions, or longer deletions called microhomology-mediated deletions, and are based on specific sequences that exist at the Cas9-cut site. The algorithm was then able to use the sequences that determine each repair to predict Cas9 editing outcomes, the researchers reported in Nature Biotechnology. The predicted repairs are similar to Sherwood’s, but based on much more data, Allen and Parts say.“It’s the right place and the right time for these predictions to occur,” says Rich Stoner, the chief science officer at Synthego, a genome engineering company interested in developing repair-prediction programs, similar to inDelphi, FORECasT, and a third one called SPROUT, for commercialization. However, Stoner notes, a still-unpublished analysis of the three algorithms’ results reveals that at times they all made vastly different predictions for the same cuts in the same types of cells, suggesting that the algorithms’ accuracy needs improvement.Accurate predictions of sequence repair could allow researchers to computationally predict the precise guide RNAs that will reproduce exact human patient mutations, leading to the development of better research models to study genetic disease. Sherwood and his colleagues also showed that their algorithm could predict which guide RNAs would be needed to—without a repair template—correct disease-causing mutations found in human patients, a clinical application of CRISPR that is still years, if not decades, from becoming a reality. The predicted repairs worked on cell lines from patients with a rare genetic disease that causes a blood clotting deficiency and albinism, and another that includes growth failure and nervous system deterioration.Next, Sherwood says, “we would want to test whether we can fix disease-causing mutations in animal models, with an eventual goal of doing so for human patients.”",
      id: 3,
      topics: ["Artificial Intelligence", "Machine Learning"]
    },
    {
      title: "Microbiology Meets Machine Learning",
      subtitle:
        "Artificially intelligent software has human-like ability to analyze host-pathogen interactions in microscopy images.",
      author: "Ruth Williams",
      date: "Apr 30, 2019",
      image:
        "https://cdn.the-scientist.com/assets/articleNo/65780/hImg/31783/the-literature-x.png",
      text:
        "Computational systems called neural networks—based on the learning processes of biological brains—enable a form of machine learning that has the potential to help researchers interpret biological and medical images. Scientists who study how pathogens interact with host cells are now beginning to harness such technology.“Most people in the [pathogen-host interactions] field were just manually counting—literally sitting there and assessing how many [parasites] per cell, how many in one of these vacuoles,” and so on, says parasitologist Eva Frickel of the Francis Crick Institute in London. “My students were losing hours and hours, days and weeks counting these events.” Neural networks are used for all manner of image-processing tasks, such as face recognition, diagnostics, and self-driving cars, so Frickel thought such a system might offer a solution to her team’s problem. She teamed up with computational biologist Artur Yakimovich of the Medical Research Council’s Laboratory for Molecular Cell Biology to make a human-like host-pathogen analyzer.Yakimovich, Frickel, and colleagues started with an existing open-source neural network–based analytics platform called KNIME (for Konstanz Information Miner) and tweaked its algorithms to process images of host cells and their pathogens. The system required training with thousands of example images, and once it was up and running, the team gave the system a name: HRMAn, pronounced Herman, for Host Response to Microbe Analysis.They’ve used the software to analyze Toxoplasma gondii and Salmonella enterica infections in a variety of human cell lines. Other high-throughput image-analysis software may be capable of identifying which cells contain pathogens, but HRMAn comes into its own, says Frickel, in its ability to identify multiple visual characteristics of pathogens and host cells at once and detect patterns in the images. Indeed, the team demonstrated that HRMAn could simultaneously recognize pathogen killing, replication, and a variety of cellular defense processes—just as a trained scientist might, but the computer had far higher throughput and greater statistical strength, and did not require tea breaks and sleep.“It’s a tool that goes beyond our ability as humans to process and to interpret image data,” says parasitologist Adrian Hehl of the University of Zurich who was not involved in the study (eLife, 8:e40560, 2019).",
      id: 4,
      topics: ["Artificial Intelligence", "Image Analysis"]
    },
    {
      title: "Computational Tools Sort Signal from Noise",
      subtitle:
        "Researchers are developing computational approaches to extract information from multiple sets of single-cell sequencing data.",
      author: "Carolyn Wilke",
      date: "Apr 30, 2019",
      image:
        "https://cdn.the-scientist.com/assets/articleNo/65782/hImg/31674/rna-seq-data-x.png",
      text:
        "In the not-so-distant past, researchers had to pool thousands of cells together for bulk RNA sequencing, yielding an averaged snapshot of gene expression. But advances in technology and significant reductions in cost now enable scientists to sequence RNA from single cells, unleashing a flood of transcription data.“It used to be that you had to wait for the biologists [to generate data for analysis], but now we are the slow guys,” says Fabian Theis, a computational biologist at Helmholtz Zentrum München in Germany. “There’s just so much data to analyze that we can’t keep up.”One difficulty with single-cell RNA sequencing data is separating meaningful variation from noise. For instance, a gene may appear “silent” because it is not expressed or because its expression was missed for technical reasons. Theis and colleagues try to cut that noise with an artificial intelligence algorithm called a deep count autoencoder (DCA), an artificial neural network that can compress gene expression data into fewer dimensions, distilling the information down to its most important relationships.To see how well these parameters capture the full picture, the algorithm recreates a full-size dataset and compares it to the original, noting the differences. It repeats this process, stopping once the program doesn’t achieve an improvement after 25 cycles. In two trials with simulated data, the scientists removed some sequences from the database to introduce noise and found that the autoencoder could recover cell-type information that had become masked. In their Nature Communications paper published early this year, they also applied the algorithm to several examples of real transcriptome data, using it in one case to identify the cell types in a blood sample—a task required for various medical and research applications.Another group published an AI-based tool similar to DCA a few months earlier, which could also recover data hidden by noise and cluster cells into subgroups based on their mRNA (Nat Methods, 15:1053–58, 2018). Compared with more-traditional statistical approaches, the autoencoder techniques are “a more universal approach, quite elegant, where you . . . can let the machine learning take care of fitting all the parameters,” says Peter Kharchenko, a computational biologist at Harvard University who was not involved in this research. Plus, he adds, they’re very flexible and scalable. “The huge advantage of these [models] is that it’s easier to build on these tools.”In addition to extracting more information from individual data sets, researchers can combine data from different days and augment their pool of sequences with ones from other labs. Considering multiple data sets together allows researchers to view a more complete landscape of cellular biology, says Zhichao Miao, a computational postdoc at the European Molecular Biology Laboratory–European Bioinformatics Institute. However, sequence reads in different datasets are influenced not only by biological variation in the cells being sequenced—differences over time or between treatment groups—but by unintended variation in experimental conditions and in the methodology, such as the sequencing protocol used.Scientists use statistical approaches to remove such technical noise—so-called batch effects—while trying to capture and dissect biological variation. But there wasn’t a quantitative metric for measuring how “batchy” the data remain, says Miao. So he, Theis, and their collaborators developed a method called k-nearest-neighbor batch-effect test, or kBET, that determines variance in the datasets and scores the different approaches on how well they eliminate batch effects to leave data that are “well mixed.”The kBET work, published online in Nature Methods last December, is a “good step forward,” says Kharchenko, but new approaches may be required to evaluate batchiness in highly variable datasets, such as RNA sequences from cancer patients and healthy people. “If you consider the difference between samples to be technical variability, then it’s clear what you want to do with it. You want to remove it,” says Kharchenko, whose lab is developing tools for analyzing datasets with more-systematic differences. “If we move to that more challenging setting [of comparing very different groups], then the question itself becomes a little bit less obvious.”",
      id: 5,
      topics: ["Artificial Intelligence", "Machine Learning"]
    },
    {
      title: "Image of the Day: Bad Behavior",
      subtitle:
        "A deep learning program can identify cells with higher metastatic potential based on the way they look and move.",
      author: "Kerry Grens",
      date: "Dec 12, 2018",
      image:
        "https://cdn.the-scientist.com/assets/articleNo/65202/iImg/29879/metastatic.gif",
      text:
        "Scientists have developed a method to determine which tumor cells are most likely to metastasize efficiently to distant sites in the body. Assaf Zaritsky, now at Ben-Gurion University in Israel, and his colleagues in Gaudenz Danuser’s lab at UT Southwestern Medical Center designed a deep learning program that analyzes data from live phase-contrast imaging of melanoma cells taken from xenografts—mice implanted with patients’ tumor material. The program determined “the most representative morphological and behavioral properties of each melanoma cell and then demonstrated that this representation of the cell state can be used to predict in stage III melanoma excised from the lymphatic system the chances of progression to stage IV,” Zaritsky writes to The Scientist in an email. The scientists presented their “quantitative live cell histology” results at the American Society for Cell Biology / EMBO meeting in San Diego on Monday (December 10).",
      id: 6,
      topics: ["Neural Networks", "Cancer", "Machine Learning"]
    }
  ]
};

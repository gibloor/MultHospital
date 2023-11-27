--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-04-29 12:37:28 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts (
    id integer NOT NULL,
    login character varying(20),
    name character varying(20),
    password character varying(20),
    test_passed boolean DEFAULT false NOT NULL,
    level character varying(20),
    email character varying(40),
    permission integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.accounts OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16401)
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_id_seq OWNER TO postgres;

--
-- TOC entry 3638 (class 0 OID 0)
-- Dependencies: 210
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;


--
-- TOC entry 211 (class 1259 OID 16402)
-- Name: achievements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.achievements (
    id integer NOT NULL,
    user_id integer,
    title integer,
    degree integer,
    viewed boolean DEFAULT false NOT NULL
);


ALTER TABLE public.achievements OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16406)
-- Name: achievements_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.achievements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.achievements_id_seq OWNER TO postgres;

--
-- TOC entry 3639 (class 0 OID 0)
-- Dependencies: 212
-- Name: achievements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.achievements_id_seq OWNED BY public.achievements.id;


--
-- TOC entry 213 (class 1259 OID 16407)
-- Name: characters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.characters (
    id integer NOT NULL,
    multfilm_id integer,
    name character varying(30)
);


ALTER TABLE public.characters OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16410)
-- Name: characters_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.characters_id_seq OWNER TO postgres;

--
-- TOC entry 3640 (class 0 OID 0)
-- Dependencies: 214
-- Name: characters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;


--
-- TOC entry 215 (class 1259 OID 16411)
-- Name: multfilms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.multfilms (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    serial integer,
    level integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.multfilms OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16414)
-- Name: multfilms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.multfilms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.multfilms_id_seq OWNER TO postgres;

--
-- TOC entry 3641 (class 0 OID 0)
-- Dependencies: 216
-- Name: multfilms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.multfilms_id_seq OWNED BY public.multfilms.id;


--
-- TOC entry 217 (class 1259 OID 16415)
-- Name: questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questions (
    id integer NOT NULL,
    level character varying(20),
    question character varying(100),
    newcomers boolean DEFAULT false NOT NULL,
    multfilm character varying(30)
);


ALTER TABLE public.questions OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16419)
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.questions_id_seq OWNER TO postgres;

--
-- TOC entry 3642 (class 0 OID 0)
-- Dependencies: 218
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;


--
-- TOC entry 219 (class 1259 OID 16420)
-- Name: watched; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.watched (
    id integer NOT NULL,
    multfilm character varying(40),
    user_id integer,
    viewed boolean DEFAULT false NOT NULL,
    level integer,
    date character varying(100)
);


ALTER TABLE public.watched OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16424)
-- Name: viewed_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.viewed_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.viewed_id_seq OWNER TO postgres;

--
-- TOC entry 3643 (class 0 OID 0)
-- Dependencies: 220
-- Name: viewed_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.viewed_id_seq OWNED BY public.watched.id;


--
-- TOC entry 3458 (class 2604 OID 16489)
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);


--
-- TOC entry 3460 (class 2604 OID 16490)
-- Name: achievements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.achievements ALTER COLUMN id SET DEFAULT nextval('public.achievements_id_seq'::regclass);


--
-- TOC entry 3461 (class 2604 OID 16491)
-- Name: characters id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);


--
-- TOC entry 3463 (class 2604 OID 16492)
-- Name: multfilms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.multfilms ALTER COLUMN id SET DEFAULT nextval('public.multfilms_id_seq'::regclass);


--
-- TOC entry 3465 (class 2604 OID 16493)
-- Name: questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);


--
-- TOC entry 3467 (class 2604 OID 16494)
-- Name: watched id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.watched ALTER COLUMN id SET DEFAULT nextval('public.viewed_id_seq'::regclass);


--
-- TOC entry 3621 (class 0 OID 16395)
-- Dependencies: 209
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts (id, login, name, password, test_passed, level, email, permission) FROM stdin;
31	GibloorFlex	GibloorFlex	KJRTH32dfh13	t	uncommon	\N	t	1
32	Giboos	GibloorX	KJRTH32dfh13	t	uncommon	\N	t	1
33	Gibloorik	Gibloorik	KJRTH32dfh13	t	rare	\N	t	1
34	jghjghjg	ghjhgjg	jhgjhgj	t	uncommon	\N	t	1
35	jkhkhkjh	jhkjhk	kjhkhkjh	t	uncommon	\N	t	1
36	Gibloor99	ghjgjghjhg	KJRTH32dfh13	t	uncommon	\N	t	1
37	Gibloor98	tryrtyr	KJRTH32dfh13	t	uncommon	\N	t	1
38	Giblsda	gfhfghfg	dsadsad	t	uncommon	\N	t	1
39	hfghgfh	gfhfghf	hfghgfhfg	t	uncommon	\N	t	1
40	kjhkhkh	kjljhgjhkhj	kjhkjh	f	uncommon	\N	t	1
41	kjhkjhk	jjkkkhjk	jkhkhk	f	uncommon	\N	t	1
42	bnvnvbn	bbvnvb	nbvnbvn	f	uncommon	\N	t	1
43	gfdgdg	gfdgfd	gfdgdf	f	uncommon	\N	t	1
44	bvcbvcb	vcbvcb	bvcbvcb	f	uncommon	\N	t	1
45	hgfhgfhf	hgfhgfh	hgfhgfh	f	uncommon	\N	t	1
46	fdsfds	fdsfds	fdsfds	f	uncommon	\N	t	1
47	vxcbcxb	xbcvbxvb	vxcvbbvc	f	uncommon	\N	t	1
48	gfhgfh	hgfhgf	hgfhgfh	f	uncommon	\N	t	1
49	hgfhgfh	hgfhgfh	hgfhgfh	f	uncommon	\N	t	1
50	zxcvbnm	cvbcxzcxz	zxcvbnm	f	uncommon	\N	t	1
51	mnbvcxz	mnbvcxz	mnbvcxz	t	uncommon	\N	t	1
52	mnbmnbmnb	mnbmnbm	mnbmnbmbn	t	uncommon	\N	t	1
53	vbmnbvm	bvnmnm	mnbmnvnb	t	uncommon	\N	t	1
54	hggfhfdg	fghfhfgh	hgfdhgdfh	f	uncommon	\N	t	1
55	dfgdfg	vdfsgfsd	dsffdsfds	t	uncommon	\N	t	1
56	nvbnvbnv	vnvbnvb	nbvnbvnv	t	uncommon	\N	t	1
57	nnnnnn	nnnnnn	nnnnnn	t	rare	\N	t	1
58	zzzzzzz	zzzzzzz	zzzzzzz	t	rare	\N	t	1
59	cvbxcb	cbxcvb	xcvbcxb	t	rare	\N	t	1
60	mmmmmm	mmmmmm	mmmmmm	t	rare	\N	t	1
61	cxvbxcbvxvb	xcvbcvxbx	xcvbcvb	t	rare	\N	t	1
62	jhkjhk	ghjkjhkj	jhkjhkhjk	t	rare	\N	t	1
63	vbnvbnvbn	vcbnvnbvn	vbnbvnvb	t	rare	\N	t	1
64	gfdgdfgdf	fdgfdgd	gfdgfdg	t	rare	\N	t	1
65	hgfhgfhfg	ghfhfghfg	hgfhgfhfgh	f	rare	\N	t	1
66	chapolah	chapolah	chapolah	f	rare	\N	t	1
30	belshime	chapalah	gorudzo	t	rare	\N	t	1
67	bvnvbnvbn	bvnvbnvnvb	nbvnvbn	t	rare	\N	t	1
68	nvbmnbmv	vbmnnbv	bnmbnm	t	uncommon	\N	t	1
69	vnbncv	nvcnbn	vnnvcnvb	t	uncommon	\N	t	1
70	dsadsadas	assdadsa	dsadsadsa	t	rare	\N	t	1
71	bnmnbmnb	vbmnvbmbnb	mnbmnbmn	t	rare	\N	t	1
72	sdfdsfs	sdfdsfs	fsdfsdf	t	rare	\N	t	1
73	ghjghjghj	fghfghjgj	gjghjghj	t	rare	\N	t	1
74	dfsfdsfs	dsfsdfds	fdsfdsfds	f	rare	\N	t	1
75	jhgjhgj	hgjghjhg	jhgjhgj	f	rare	\N	t	1
76	hfghgf	vbhfghgf	hgfhgf	t	rare	\N	t	1
77	dsfdsfs	fsdfdsf	fdsfdsf	f	rare	\N	t	1
78	hgfjfgj	ghjghfjg	ghfjfg	f	rare	\N	t	1
79	fdgfdgd	fdgfdgd	fgdgfdgfd	f	rare	\N	t	1
80	fdsfdsfs	dsfdsfs	dfsfdsfs	f	rare	\N	t	1
81	hjkhjgkj	dfhfdh	jhkjhk	f	rare	\N	t	1
82	dsfgfdgsfgds	dsgdfggs	fsdgfsdgfd	f	rare	\N	t	1
83	gfdgfdgdfg	gfdgfsfgdfgdf	fdgfdgfdgdf	f	rare	\N	t	1
84	ytrytryrt	fghfytryryrt	ytrytryrt	f	rare	\N	t	1
85	fdsgfds	fsdgfsd	dfgsdfgds	f	rare	\N	t	1
86	xfyfdydfy	fdytyxfy	dfyydyf	f	rare	\N	t	1
87	fghfghfh	dfgfdgdfg	fghfghf	f	rare	\N	t	1
88	fghdsda	dfgfdytutyu	fghuytuyt	f	rare	\N	t	1
89	piopoip	oppoipio	piopiop	f	rare	\N	t	1
90	dfasfsdf	fdsfsdafa	fsdfadfs	f	rare	\N	t	1
92	fsdgdfsgd	fdsgfdsg	fdggfdgfd	f	rare	\N	t	1
93	dsfdsfdsf	sfsdfsdff	fdsfdsfsdf	f	rare	\N	t	1
94	fdasfdsaf	asdfsdfa	dasfdsf	f	rare	\N	t	1
95	kljljklkjl	jhljkljh	jkljkljkl	f	rare	\N	t	1
96	fghfghf	ghfdhgf	fghgfhfh	f	rare	\N	t	1
97	jkjhkhjk	hjgkjkiuo	jhkhgjkjh	f	rare	\N	t	1
98	dasfdsfds	adsfsfd	fdsfdsfs	f	rare	\N	t	1
99	sfdgdsf	sdfgdfsgf	dsgfdgfd	f	rare	\N	t	1
100	jhgjghjhgj	jhjgjhgjhg	jghjghjgh	f	rare	\N	t	1
101	adsfsdfs	sadfsdfsd	dfdsfsdfs	f	rare	\N	t	1
111	dsadasda	dsadsada	sadsadsad	f	rare	\N	t	1
112	sfdgfdsg	ddfgdfgs	sfdgdfgfdg	f	rare	\N	t	1
113	gfhfghfghf	fghghdfhfh	hfghfghfg	f	rare	\N	t	1
102	asdsdfdsfa	asdsdfdsfa	asdsdfdsfa	f	rare	\N	t	1
103	dsadasdad	sdadsadds	saddasdadsd	f	rare	\N	t	1
104	dsafdsaf	xvsdaf	asdfdsafdsf	f	rare	\N	t	1
105	asdasdasd	sadsadsad	assdsadasd	f	rare	\N	t	1
106	asdsad	dsadasd	sdadasda	f	rare	\N	t	1
107	dsadsadad	sdadsadsad	dsadasdds	f	rare	\N	t	1
108	asdfdsdfs	asfsfads	dsffdsfds	f	rare	\N	t	1
109	dasfsdfsdf	sadfsdafd	dsffsdfs	f	rare	\N	t	1
91	gibloorZXC	gibloorZXC	gibloorZXC	t	rare	\N	t	1
110	zxcvcxzvzxv	dsfdsaxcvzxcv	xzvxzcvz	f	rare	\N	t	1
114	gibloorZXCs	gibloorZXC	gibloorZXC	f	rare	\N	t	1
115	fgjghjghj	fgjhgj	jhgjhgjgj	f	rare	\N	t	1
116	dsadasddsa	sadasdads	dsadsadas	f	I don`t now	\N	t	1
117	fdsfsdfds	sdfsdfsdfds	fdsfdsfdsf	t	rare	\N	t	1
118	fdsfdsfds	dfsfdsfs	fdsfdsf	t	rare	\N	t	1
119	gjhkjghkj	hjkjhkgh	hjkjghj	f	rare	\N	t	1
120	fgjgfhjghjhg	gjgfjgjj	hgjghjhgjghj	f	rare	\N	t	1
121	jghfjhfgfj	dfghjghjffjg	fjhfgjghjgj	t	rare	\N	t	1
122	hdfhfgdh	dfgsdfgfgh	fdhfhfgh	f	rare	\N	t	1
123	ghjfhgj	fgjgfjhhfg	jghjghjgh	t	rare	\N	t	1
124	gibloorZXCx	gibloorZXC	gibloorZXC	f	rare	\N	t	1
125	gibloorZXC1	gibloorZXC	gibloorZXC	f	rare	\N	t	1
126	GibloorZZZ	GibloorZZZ	GibloorZZZ	f	rare	\N	t	1
127	pchelaS	pchelaS	pchelaS	f	rare	\N	t	1
128	sadfdghfg	sadfdghfg	sadfdghfg	f	rare	\N	t	1
129	sadfdghfgs	sadfdghfgs	sadfdghfgs	f	rare	\N	t	1
130	gibossd	gibossd	gibossd	f	rare	\N	t	1
131	gibossdsd	gibossdsd	gibossdsd	f	rare	\N	t	1
132	gibodftre	gibodftre	gibodftre	f	rare	\N	t	1
133	adodftre	adodftre	adodftre	f	rare	\N	t	1
134	adodftres	adodftres	adodftres	f	rare	\N	t	1
135	adodftrag	adodftrag	adodftrag	f	rare	\N	t	1
136	adodftragd	adodftragd	adodftragd	f	rare	\N	t	1
137	yuidftragd	yuidftragd	yuidftragd	f	rare	\N	t	1
138	xzczsda	xzczsda	xzczsda	f	rare	\N	t	1
139	xzczsdas	xzczsdas	xzczsdas	f	rare	\N	t	1
140	yuiyuiyu	yuiyuiyu	yuiyuiyu	f	rare	\N	t	1
141	fghfghfs	fghfghfs	fghfghfs	f	rare	\N	t	1
142	fghfghfsa	fghfghfsa	fghfghfsa	f	rare	\N	t	1
143	sdfdsfasd	sdfdsfasd	sdfdsfasd	f	rare	\N	t	1
144	sdfewqeqw	sdfewqeqw	sdfewqeqw	f	rare	\N	t	1
145	saddsasd	saddsasd	saddsasd	f	rare	\N	t	1
146	saddsasda	saddsasda	saddsasda	f	rare	\N	t	1
147	luilulu	luilulu	luilulu	f	rare	\N	t	1
148	fghfghfgdsf	fghfghfgdsf	fghfghfgdsf	f	rare	\N	t	1
149	xaacxa	xaacxa	xaacxa	f	rare	\N	t	1
150	axascac	axascac	axascac	f	rare	\N	t	1
151	gibloorZXCxzc	gibloorZXCxca	gibloorZXCzc	f	rare	\N	t	1
152	nmvbnvn	nmvbnvn	nmvbnvn	f	rare	\N	t	1
153	gibloorZXCq	gibloorZXC	gibloorZXCq	f	rare	\N	t	1
154	gibloorZXCa	gibloorZXCa	gibloorZXCa	f	rare	\N	t	1
155	gibloorZXCM	gibloorZXCM	gibloorZXCM	t	rare	\N	t	1
156	gfjhfghjfg	ghjfgjf	fjhgfjhg	t	rare	\N	t	1
157	gibloorZXCqx	gibloorZXCqx	gibloorZXCqx	t	rare	\N	t	1
158	gibloorCSV	gibloorCSV	gibloorCSV	t	rare	\N	t	1
159	gibloorSVC	gibloorSVC	gibloorSVC	t	rare	\N	t	1
160	gibloorZXCj	gibloorZXCj	gibloorZXCj	t	rare	\N	t	1
161	labyda	labyda	labyda	f	I don`t now	\N	t	1
162	zalabat	zalabat	zalabat	f	\N	\N	t	1
188	gibloorZXCghf	gibloorZXCghf	gibloorZXCghf	f	\N	\N	t	1
173	pchelovek	pchelovek	pchelovek	t	uncommon	\N	t	1
189	gibloorZXCmy	gibloorZXCmy	gibloorZXCmy	f	\N	\N	t	1
174	published	published	published	t	common	\N	t	1
190	bnhgytuyt	bnhgytuyt	bnhgytuyt	f	\N	\N	t	1
175	publishedx	publishedx	publishedx	t	rare	\N	t	1
191	sdsfsdfds	sdsfsdfds	sdsfsdfds	f	\N	\N	t	1
176	alexyini	alexyini	alexyini	t	rare	\N	t	1
192	sdsfsdfdsd	sdsfsdfdsd	sdsfsdfdsd	f	\N	\N	t	1
177	nabynaka	nabynaka	nabynaka	t	rare	\N	t	1
193	gibloorZXClk	gibloorZXClk	gibloorZXClk	f	\N	\N	t	1
194	ffghytutyu	ffghytutyu	ffghytutyu	f	\N	\N	t	1
195	picheka	picheka	picheka	f	\N	\N	t	1
196	hgjtyutv	hgjtyutv	hgjtyutv	f	\N	\N	t	1
197	gibloorZXCkk	gibloorZXCkk	gibloorZXCkk	f	\N	\N	t	1
198	sadaseqwe	sadaseqwe	sadaseqwe	f	\N	\N	t	1
199	myuiuyi	myuiuyi	myuiuyi	f	\N	\N	t	1
200	qrqxzcasd	qrqxzcasd	qrqxzcasd	f	\N	\N	t	1
178	vnvbnvb	vnvbnvb	vnvbnvb	t	rare	\N	t	1
219	dsfdsfwejgbc	dfretretert	sdsadweqxa232	f	\N	gibloodsr@yandex.ru	f	1
179	gibloorZXCl	gibloorZXCl	gibloorZXCl	t	common	\N	t	1
201	bezajar	bezajar	bezajar	t	rare	\N	t	1
202	gabazaba	shmelxxx	gabazaba	f	\N	\N	t	1
203	petrychioS	petrychio	petrychioS	f	\N	\N	t	1
180	baklazan	baklazan	baklazan	t	common	\N	t	1
204	petrychioX	petrychioX	petrychioX	f	\N	\N	t	1
181	pchelovod	pchelovod	pchelovod	t	uncommon	\N	t	1
182	asdasdki	asdasdki	asdasdki	t	common	\N	t	1
220	saxdsdweew	sadaqwe	asdasd	f	\N	sasddsaas@asd.ase	f	1
183	gibloorZXCmk	gibloorZXCmk	gibloorZXCmk	t	common	\N	t	1
205	Giborator	Giborator	Giborator	t	rare	\N	t	1
184	Gibloor	Gibloor	Gibloor	t	common	\N	t	1
185	bnmbmd	bnmbmd	bnmbmd	f	rare	\N	t	1
221	saeqwffgh	gibloorZXC	sadwqeqeqe	f	\N	gibloors@yandex.ru	f	1
186	gibloorse	gibloorse	gibloorse	t	uncommon	\N	t	1
206	uyikjuioui	uyikjuioui	uyikjuioui	t	rare	\N	t	1
187	gibloorZXCuy	gibloorZXCuy	gibloorZXCuy	f	\N	\N	t	1
207	Gebize	Gebize	Gebize	t	3	\N	t	1
225	adqwewqeseq	asdqweqwe	sadqwesadsd	t	3	asdasdsa@sd.dy	f	1
208	GebizeZ	GebizeZ	GebizeZ	t	3	\N	t	1
209	dsdasdsa	sdadsad	sdasdsasd	f	\N	\N	t	1
210	dsadsadsa	gibloorZXC	dsadsadsada	f	\N	\N	t	1
211	pchelovodXC	gibloorZXC	pchelovod	f	\N	slavukas@inbox.ru	t	1
214	Kalaborat	Kalaborat	Kalaborat	f	\N	slavukas@inbox.ru	t	1
215	ChapalahCS	Chapalah	Chapalah	f	\N	kubrakov99@mail.ru	f	1
216	sadwewqeewq		asdqweaxd232323sa	f	\N	slavukas@inbox.ru	f	1
222	Gibonkas	gibloorZXC	Gibonkas	t	3	Gibonkas@asd.vs	f	1
217	Gibonchik	Gibloorus	Gibonchik	t	3	Gibonchik@yandex.sy	f	1
218	gibloorZXCsda	gibloorZXC	sdawqeqweq	f	\N	slavukasxs@inbox.ru	f	1
224	safsdfewrwe	srfewrwe	asdqeqweqe23	t	3	sdfsdfs@ad.sd	f	1
223	Baklazyk	Pchelka	Baklazyk	t	3	Baklazyk@sd.asd	f	1
226	asdwqewq	sadwqewq	sadqweqwesad	t	3	slavukas23@inbox.ru	f	1
227	sdadasxx	sadqweq	awexzcvwer	t	3	sasad@vcb.ssd	f	1
228	sadsadsa23	asdqewq	sadwqes	t	3	slavuka5ds@inbox.ru	f	1
229	sdfgfv	wertyrty	asdqeqxc	t	3	kubrako2v99@mail.ru	f	1
230	sadswwe	sadwqeqwe	sadwq2323	t	3	slavuk32as@inbox.ru	f	1
231	fcgfdewr	qwetrrtryrt	dfwerc34	t	3	kubrakov9ds9@mail.ru	f	1
232	asdwqeqwesd	erwewrwe	asdqwexsadqe	t	3	slavukas@inb32ox.ru	f	1
233	asdsads	wqeqweq	qwexadqw32	t	2	kubrakovw99@mail.ru	f	1
234	iuiuhuhu	khjhggyh	kujugftftg	t	3	slavuk25as@inbox.ru	f	1
245	dfwerwesdfsd	gibloorZXC	dfewrewrw	t	1	sfds@sad.we	f	1
235	gtfdytrtf	njbvgcfdxed	jiyuygyuguyjhg	t	3	kubrakuyugyov99@mail.ru	f	1
246	dfgretertre	dsfrewet	dsfewrxsfsd	t	2	gi43bloor@yandex.ru	f	1
254	fdghfrhf	yrytry	dfgfeter	t	2	slavu685876as@inbox.ru	f	1
236	sxcvfryrtyrty	sadqweqwe	sdasdsqe23	t	3	sdfds@fdg.dsfd	f	1
247	dfddfgre	retrete	sdfwersf	t	2	ku32brakov99@mail.ru	f	1
237	sxfewrwe	ewqrszfds	ssqeqwqe23	t	3	giblssoor@yandex.ru	f	1
238	xzcvdswer	xdxfsrfdsrete	asewqexzdsae	t	1	kubrakoasdv99@mail.ru	f	1
248	erwrscxvdf	giblsoorZXC	sadwqrxcv	t	2	ku145brakov99@mail.ru	f	1
239	sadfsdsdf	dwaedxwer	adwqwq32sd	t	1	slavsdqeukas@inbox.ru	f	1
240	mmdasdmmma	sasaewrsdfwe	xcvef543dgfd	t	1	kubraqekov99@mail.ru	f	1
241	asdasdaxa	gibloorZXC	asdwqeqeqw	t	1	kubrakov99@mail.ru	f	1
249	iulfgh	gibloorZXC	dsfdwrcvre	t	2	kubra787ov99@mail.ru	f	1
255	sdfwerwe	dsrfewrew	dqweqeq	t	2	sdfwer@asd.sd	f	1
250	fdgdtert	juyuyghj	dfgertcdgd	t	2	kubr765akov99@mail.ru	f	1
256	dfgdfger	tertet	dfetertert	t	2	kubr756akov99@mail.ru	f	1
257	dretetert	tretedfg	rteterted	t	2	kub867rakov99@mail.ru	f	1
258	dfwerwer	werwerw	dfwrwersd	t	2	kubrakov989@mail.ru	f	1
242	fdgfdgdfgd	dftertdrf	fghrtycvbr	t	1	kubrakovfgh99@mail.ru	f	1
259	gibloorZweXC	ertrete	gibloorZXCewr	t	2	kubrweakov99@mail.ru	f	1
243	gibloorZdsfds	fdgerter	edqwexcdqwe	t	3	kubraksdfdsov99@mail.ru	f	1
260	retrete	gibloorZXC	erwrewrwe	t	2	kubrakov99@mail.ru	f	1
261	gibloorZXCdsf	rret	sdfwrwer	t	2	kubrakov9sd9@mail.ru	f	1
262	dsfewr	mmmmmm	tertertertret	t	2	kubrak675ov99@mail.ru	f	1
263	dretete	ytrtyrdfg	wqeqeqeasd	t	2	dfdrte@asd.sd	f	1
244	dfdfgrete	dfgdger	serewrerwrwe	t	1	erer@dfg.ffg	f	1
251	jghiuyiy	uytutyu	frtcikjlio	t	2	kubrann3kov99@mail.ru	f	1
252	cvedter	dsafewr	cvfdtertert	t	2	kubrakdfov99@mail.ru	f	1
253	dsrfewrxcf	rtyrtfghr	sdfrew4343	t	2	kub675rakov99@mail.ru	f	1
264	GIbostor	KUBRAK	dfkasd	f	\N	giblok@yasha.by	f	1
266	xcfdsfsdf	ewfewrwer	dsfredetert	f	\N	gibokle@asd.df	f	1
274	aaaaaaxcxz	Никита	iuyiuyiuy	t	2	gibloor@yasdandex.ru	f	1
265	retertert	fewrte	fretegrg	t	2	ffgdfg@fg.ghg	f	1
267	dfrefvef	dsfdswer	sdfefrdfre	t	3	kubrakodfdedv99@mail.ru	f	1
275	sdsdfsdf	твытытва	asfasfsfa	t	2	gibldsfoor@yandex.ru	f	1
268	grhttht	retegfe	fgrtryty	t	1	ffgdffgg@fg.ghgf	f	1
284	dgdgfdgd	выаывпав	fdhrgfgfh	t	2	giblsdoor@yandex.ru	f	1
276	chupokabra	Baklazan	iuyiuyiuy	t	2	kubrakovsss99@mail.ru	f	1
269	aaaaaafghfgh	nnnnnngfhhg	hthghfhg	t	2	kubrakghtov99@mail.ru	f	1
270	mnjjhhmn	nmmnnm	bjgygjijk	t	2	kub898rakov99@mail.ru	f	1
285	Slave1	Slave	KJRNFHJUFH	t	1	slave1@yandex.ru	f	1
278	dfwfwdrw	wrwerwr	iuyiuyiuy	f	2	kubdfsfrakov99@mail.ru	f	1
271	werwerwrw	Никита	sfwersdffd	t	2	givcsbloor@yandex.ru	f	1
279	asdasdasds	sadsadasdas	sadsadasd	f	\N	slavusdkas@inbox.ru	f	1
280	asdqwesd	Никита	sfdwrwerwrwer	f	\N	kubsawerakov99@mail.ru	f	1
281	HospitalLord2	Никита	iuyiuyiuy	f	\N	gibloor@yandex.ru	f	1
282	P4elykysa	Psqeqeqe	P4elykysa	t	2	gib123loor@yandex.ru	f	1
272	Bastaraz	Cherepaha	parolamega	t	2	gibloor45@yandex.ru	f	1
273	aaaaaa23	Никита	asdasdDD	f	\N	kubraCXkov99@mail.ru	f	1
277	HospitalLord	HospitalLord	HospitalLord	t	2	HospitalLord@yandex.ru	f	5
286	aaa31zca	Никита	wws1312	t	1	gibl232oor@yandex.ru	f	1
283	Baklazan	Gribok	varenik42	t	3	baklazan@mail.ru	f	1
\.


--
-- TOC entry 3623 (class 0 OID 16402)
-- Dependencies: 211
-- Data for Name: achievements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.achievements (id, user_id, title, degree, viewed) FROM stdin;
\.


--
-- TOC entry 3625 (class 0 OID 16407)
-- Dependencies: 213
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.characters (id, multfilm_id, name) FROM stdin;
1	4	RickSanchez
2	4	MortySmith
3	4	JerrySmith
4	4	SummerSmith
5	4	BethSmith
6	7	EricCartman
7	7	KennyMcCormick
8	7	KyleBroflovski
9	7	StanMarsh
10	3	KaijiIto
11	3	KazutakaHyodo
12	3	YukioTonegawa
13	2	TulipOlsen
14	2	OneOne
15	22	Brett
16	22	Reagan
17	24	Critter
18	24	Pim
19	11	Invincible
20	11	OmniMan
21	5	Emma
22	5	Norman
23	5	Ray
24	14	Dipper
25	14	Mabel
26	14	Soos
27	14	Wendy
28	14	StanPainz
29	13	Patrick
30	13	Broth
\.


--
-- TOC entry 3627 (class 0 OID 16411)
-- Dependencies: 215
-- Data for Name: multfilms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.multfilms (id, name, serial, level) FROM stdin;
4	Rick&Morty	1	1
5	Neverland	2	2
8	Futurama	4	1
2	InfinityTrain	3	2
18	OnePunchMan	6	1
16	AttackOnTitan	8	1
9	HorseBojack	4	2
12	Arcane	5	1
15	Avatar	5	2
19	OverGarden	6	2
14	GravityFalls	3	1
22	InsideJob	1	2
11	Invincible	2	1
25	TowerOfGod	10	2
21	SolarOpposites	9	2
10	FinalSpace	12	2
17	NoGameNoLife	7	2
7	SouthPark	9	1
26	SagaOFTanya	11	2
23	MadeInAbyss	13	2
13	CrossingSwords	3	3
24	SmilingFriends	1	3
3	Kaiji	2	3
6	SchoolLive	4	3
20	Disenchantment	8	2
1	AdventureTime	7	1
\.


--
-- TOC entry 3629 (class 0 OID 16415)
-- Dependencies: 217
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questions (id, level, question, newcomers, multfilm) FROM stdin;
7	2	relationshipStatus1	t	HorseBojack
8	2	gameCompite1	t	Kaiji
10	1	seriesDescription1	t	SouthPark
5	2	chooseSuitable1	t	AdventureTime
33	1	e6s1Virus	f	Rick&Morty
135	3	\N	f	Invincible
136	3	\N	f	Invincible
24	1	relationships1	t	AdventureTime
34	1	e2s2BestGame	f	Rick&Morty
35	1	e4s2JaryLove	f	Rick&Morty
36	1	e8s1Show	f	Rick&Morty
37	1	e7s2Hunt	f	Rick&Morty
38	1	e10s2Delivery	f	Rick&Morty
40	2	e5s2Potato	f	Rick&Morty
39	1	e2s2Character	f	Rick&Morty
26	2	e1s1Ass	f	Rick&Morty
137	3	\N	f	Invincible
25	2	e9s1Robot	f	Rick&Morty
41	2	e3s1Park	f	Rick&Morty
42	2	e10s2Work	f	Rick&Morty
43	2	e4s3Vindicator	f	Rick&Morty
44	2	e7s3Waffles	f	Rick&Morty
45	2	e3s4Work	f	Rick&Morty
28	2	e1s1Guy	f	Rick&Morty
27	3	e10s1Morty	f	Rick&Morty
53	3	e7s5Help	f	Rick&Morty
54	1	e1s1Hate	f	InsideJob
64	2	e1s1Spy	f	InsideJob
55	1	\N	f	InsideJob
56	1	\N	f	InsideJob
57	1	\N	f	InsideJob
58	1	\N	f	InsideJob
59	1	\N	f	InsideJob
60	1	\N	f	InsideJob
61	1	\N	f	InsideJob
62	1	\N	f	InsideJob
63	1	\N	f	InsideJob
67	2	\N	f	InsideJob
68	2	\N	f	InsideJob
69	2	\N	f	InsideJob
9	2	genre1	t	SchoolLive
30	1	e3s1Worker	f	Rick&Morty
31	1	e2s1Dog	f	Rick&Morty
32	1	e5s1JaryGame	f	Rick&Morty
70	2	\N	f	InsideJob
71	2	\N	f	InsideJob
72	2	\N	f	InsideJob
73	2	\N	f	InsideJob
77	3	\N	f	InsideJob
78	3	\N	f	InsideJob
79	3	\N	f	InsideJob
80	3	\N	f	InsideJob
81	3	\N	f	InsideJob
82	3	\N	f	InsideJob
83	3	\N	f	InsideJob
84	1	\N	f	SmilingFriends
85	1	\N	f	SmilingFriends
86	1	\N	f	SmilingFriends
87	1	\N	f	SmilingFriends
88	1	\N	f	SmilingFriends
89	1	\N	f	SmilingFriends
90	1	\N	f	SmilingFriends
91	1	\N	f	SmilingFriends
92	1	\N	f	SmilingFriends
93	1	\N	f	SmilingFriends
94	2	\N	f	SmilingFriends
95	2	\N	f	SmilingFriends
96	2	\N	f	SmilingFriends
97	2	\N	f	SmilingFriends
98	2	\N	f	SmilingFriends
99	2	\N	f	SmilingFriends
100	2	\N	f	SmilingFriends
101	2	\N	f	SmilingFriends
102	2	\N	f	SmilingFriends
103	2	\N	f	SmilingFriends
104	3	\N	f	SmilingFriends
105	3	\N	f	SmilingFriends
106	3	\N	f	SmilingFriends
107	3	\N	f	SmilingFriends
108	3	\N	f	SmilingFriends
109	3	\N	f	SmilingFriends
110	3	\N	f	SmilingFriends
111	3	\N	f	SmilingFriends
112	3	\N	f	SmilingFriends
113	3	\N	f	SmilingFriends
114	1	\N	f	Invincible
115	1	\N	f	Invincible
116	1	\N	f	Invincible
117	1	\N	f	Invincible
118	1	\N	f	Invincible
119	1	\N	f	Invincible
120	1	\N	f	Invincible
121	1	\N	f	Invincible
122	1	\N	f	Invincible
123	1	\N	f	Invincible
124	2	\N	f	Invincible
125	2	\N	f	Invincible
126	2	\N	f	Invincible
127	2	\N	f	Invincible
128	2	\N	f	Invincible
129	2	\N	f	Invincible
130	2	\N	f	Invincible
131	2	\N	f	Invincible
132	2	\N	f	Invincible
133	2	\N	f	Invincible
134	3	\N	f	Invincible
138	3	\N	f	Invincible
139	3	\N	f	Invincible
140	3	\N	f	Invincible
141	3	\N	f	Invincible
142	3	\N	f	Invincible
143	3	\N	f	Invincible
144	1	\N	f	Neverland
145	1	\N	f	Neverland
146	1	\N	f	Neverland
147	1	\N	f	Neverland
148	1	\N	f	Neverland
149	1	\N	f	Neverland
150	1	\N	f	Neverland
151	1	\N	f	Neverland
152	1	\N	f	Neverland
153	1	\N	f	Neverland
154	2	\N	f	Neverland
155	2	\N	f	Neverland
156	2	\N	f	Neverland
157	2	\N	f	Neverland
158	2	\N	f	Neverland
159	2	\N	f	Neverland
160	2	\N	f	Neverland
161	2	\N	f	Neverland
162	2	\N	f	Neverland
163	2	\N	f	Neverland
164	3	\N	f	Neverland
165	3	\N	f	Neverland
166	3	\N	f	Neverland
47	3	e5s1Cost	f	Rick&Morty
46	2	e5s1Money	f	Rick&Morty
65	2	e2s1Reward	f	InsideJob
48	3	e3s4Millz	f	Rick&Morty
66	2	e3s1Problem	f	InsideJob
74	3	e3s1Controller	f	InsideJob
75	3	e3s1Contract	f	InsideJob
76	3	e3s1Court	f	InsideJob
167	3	\N	f	Neverland
168	3	\N	f	Neverland
169	3	\N	f	Neverland
170	3	\N	f	Neverland
171	3	\N	f	Neverland
172	3	\N	f	Neverland
173	3	\N	f	Neverland
174	1	\N	f	Kaiji
175	1	\N	f	Kaiji
176	1	\N	f	Kaiji
177	1	\N	f	Kaiji
178	1	\N	f	Kaiji
179	1	\N	f	Kaiji
180	1	\N	f	Kaiji
181	1	\N	f	Kaiji
182	1	\N	f	Kaiji
183	1	\N	f	Kaiji
184	2	\N	f	Kaiji
185	2	\N	f	Kaiji
186	2	\N	f	Kaiji
187	2	\N	f	Kaiji
188	2	\N	f	Kaiji
189	2	\N	f	Kaiji
190	2	\N	f	Kaiji
191	2	\N	f	Kaiji
192	2	\N	f	Kaiji
193	2	\N	f	Kaiji
194	3	\N	f	Kaiji
195	3	\N	f	Kaiji
196	3	\N	f	Kaiji
197	3	\N	f	Kaiji
198	3	\N	f	Kaiji
199	3	\N	f	Kaiji
200	3	\N	f	Kaiji
201	3	\N	f	Kaiji
202	3	\N	f	Kaiji
203	3	\N	f	Kaiji
204	1	\N	f	GravityFalls
205	1	\N	f	GravityFalls
206	1	\N	f	GravityFalls
207	1	\N	f	GravityFalls
208	1	\N	f	GravityFalls
209	1	\N	f	GravityFalls
210	1	\N	f	GravityFalls
211	1	\N	f	GravityFalls
212	1	\N	f	GravityFalls
213	1	\N	f	GravityFalls
214	2	\N	f	GravityFalls
215	2	\N	f	GravityFalls
216	2	\N	f	GravityFalls
217	2	\N	f	GravityFalls
218	2	\N	f	GravityFalls
219	2	\N	f	GravityFalls
220	2	\N	f	GravityFalls
221	2	\N	f	GravityFalls
222	2	\N	f	GravityFalls
223	2	\N	f	GravityFalls
224	3	\N	f	GravityFalls
225	3	\N	f	GravityFalls
226	3	\N	f	GravityFalls
227	3	\N	f	GravityFalls
228	3	\N	f	GravityFalls
229	3	\N	f	GravityFalls
230	3	\N	f	GravityFalls
231	3	\N	f	GravityFalls
232	3	\N	f	GravityFalls
233	3	\N	f	GravityFalls
234	1	\N	f	InfinityTrain
235	1	\N	f	InfinityTrain
236	1	\N	f	InfinityTrain
237	1	\N	f	InfinityTrain
238	1	\N	f	InfinityTrain
239	1	\N	f	InfinityTrain
240	1	\N	f	InfinityTrain
241	1	\N	f	InfinityTrain
242	1	\N	f	InfinityTrain
243	1	\N	f	InfinityTrain
244	2	\N	f	InfinityTrain
245	2	\N	f	InfinityTrain
246	2	\N	f	InfinityTrain
247	2	\N	f	InfinityTrain
248	2	\N	f	InfinityTrain
249	2	\N	f	InfinityTrain
250	2	\N	f	InfinityTrain
251	2	\N	f	InfinityTrain
252	2	\N	f	InfinityTrain
253	2	\N	f	InfinityTrain
254	3	\N	f	InfinityTrain
255	3	\N	f	InfinityTrain
256	3	\N	f	InfinityTrain
257	3	\N	f	InfinityTrain
258	3	\N	f	InfinityTrain
259	3	\N	f	InfinityTrain
260	3	\N	f	InfinityTrain
261	3	\N	f	InfinityTrain
262	3	\N	f	InfinityTrain
263	3	\N	f	InfinityTrain
264	1	\N	f	CrossingSwords
265	1	\N	f	CrossingSwords
266	1	\N	f	CrossingSwords
267	1	\N	f	CrossingSwords
268	1	\N	f	CrossingSwords
269	1	\N	f	CrossingSwords
270	1	\N	f	CrossingSwords
271	1	\N	f	CrossingSwords
272	1	\N	f	CrossingSwords
273	1	\N	f	CrossingSwords
274	2	\N	f	CrossingSwords
275	2	\N	f	CrossingSwords
276	2	\N	f	CrossingSwords
277	2	\N	f	CrossingSwords
278	2	\N	f	CrossingSwords
279	2	\N	f	CrossingSwords
280	2	\N	f	CrossingSwords
281	2	\N	f	CrossingSwords
282	2	\N	f	CrossingSwords
283	2	\N	f	CrossingSwords
284	3	\N	f	CrossingSwords
285	3	\N	f	CrossingSwords
286	3	\N	f	CrossingSwords
287	3	\N	f	CrossingSwords
288	3	\N	f	CrossingSwords
289	3	\N	f	CrossingSwords
290	3	\N	f	CrossingSwords
291	3	\N	f	CrossingSwords
292	3	\N	f	CrossingSwords
293	3	\N	f	CrossingSwords
6	3	e1s2Character	t	Rick&Morty
29	3	e1s1Franky	f	Rick&Morty
49	3	e2s4Work	f	Rick&Morty
50	3	e4s4Cat	f	Rick&Morty
51	3	e7s4Queen	f	Rick&Morty
52	3	e3s5Hero	f	Rick&Morty
\.


--
-- TOC entry 3631 (class 0 OID 16420)
-- Dependencies: 219
-- Data for Name: watched; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.watched (id, multfilm, user_id, viewed, level, date) FROM stdin;
54	Rick&Morty	39	f	\N	\N
56	Horse Bojack	51	t	\N	\N
58	Adventure Time	51	t	\N	\N
52	Rick&Morty	38	t	\N	\N
51	Horse Bojack	38	t	\N	\N
60	Rick&Morty	52	t	\N	\N
62	Adventure Time	53	t	\N	\N
63	Horse Bojack	53	t	\N	\N
66	Adventure Time	55	t	\N	\N
68	Adventure Time	56	t	\N	\N
74	Kaiji	58	t	\N	\N
72	South park	58	t	\N	\N
163	SchoolLive	178	t	\N	\N
161	SouthPark	178	t	\N	\N
76	Kaiji	59	t	\N	\N
78	South park	60	t	\N	\N
80	Kaiji	60	t	\N	\N
37	Rick&Morty	31	f	\N	\N
38	Adventure Time	31	f	\N	\N
82	South park	61	t	\N	\N
39	Rick&Morty	32	f	\N	\N
40	Adventure Time	32	f	\N	\N
41	South park	33	f	\N	\N
42	Horse Bojack	34	f	\N	\N
43	Rick&Morty	34	f	\N	\N
44	Adventure Time	34	f	\N	\N
45	Rick&Morty	35	f	\N	\N
46	Horse Bojack	36	f	\N	\N
47	Rick&Morty	36	f	\N	\N
48	Adventure Time	36	f	\N	\N
84	South park	62	t	\N	\N
86	Kaiji	62	t	\N	\N
50	Adventure Time	37	t	\N	\N
49	Horse Bojack	37	t	\N	\N
87	South park	63	f	\N	\N
89	Kaiji	63	f	\N	\N
91	Kaiji	64	f	\N	\N
93	South park	67	f	\N	\N
95	Kaiji	67	f	\N	\N
97	Rick&Morty	68	t	\N	\N
101	Adventure Time	69	t	\N	\N
99	Horse Bojack	69	t	\N	\N
102	South park	70	t	\N	\N
104	Kaiji	70	t	\N	\N
106	Kaiji	71	t	\N	\N
107	School live	71	t	\N	\N
110	Kaiji	72	t	\N	\N
111	South park	73	t	\N	\N
113	Kaiji	73	t	\N	\N
115	School live	76	t	\N	\N
117	South park	91	t	\N	\N
119	School live	91	t	\N	\N
121	Kaiji	117	t	\N	\N
123	School live	118	t	\N	\N
127	Kaiji	121	t	\N	\N
125	South park	121	t	\N	\N
129	South park	123	f	\N	\N
131	South park	155	t	\N	\N
133	Kaiji	155	t	\N	\N
135	South park	156	t	\N	\N
137	South park	157	t	\N	\N
139	South park	158	f	\N	\N
141	School live	158	f	\N	\N
143	School live	159	f	\N	\N
145	SouthPark	160	t	\N	\N
147	Kaiji	160	t	\N	\N
149	AdventureTime	173	t	\N	\N
151	all	174	f	\N	\N
153	SchoolLive	175	t	\N	\N
155	SouthPark	176	t	\N	\N
157	Kaiji	176	t	\N	\N
159	Kaiji	177	t	\N	\N
166	\N	178	f	\N	\N
170	\N	178	f	\N	\N
165	Rick&Morty	178	t	\N	\N
168	Rick&Morty	178	t	\N	\N
172	all	180	f	\N	\N
70	Kaiji	57	t	\N	\N
174	Rick&Morty	180	t	\N	\N
176	HorseBojack	181	t	\N	\N
178	all	182	f	\N	\N
180	all	184	f	\N	\N
182	Rick&Morty	186	t	\N	\N
183	AdventureTime	186	t	\N	\N
184	Kaiji	201	t	\N	\N
188	Kaiji	205	t	\N	\N
186	SchoolLive	205	t	\N	\N
189	SouthPark	206	t	\N	\N
191	SchoolLive	206	t	\N	\N
193	Rick&Morty	208	t	3	\N
194	Rick&Morty	217	t	3	\N
195	Rick&Morty	222	t	3	\N
197	Rick&Morty	225	t	3	\N
199	Rick&Morty	227	t	3	\N
201	Rick&Morty	229	f	3	\N
203	Rick&Morty	229	f	3	\N
204	Rick&Morty	229	f	3	\N
206	Rick&Morty	230	t	3	\N
208	Rick&Morty	231	f	3	\N
210	Rick&Morty	231	f	3	\N
212	Rick&Morty	231	f	3	\N
214	Rick&Morty	231	f	3	\N
216	Rick&Morty	232	t	3	\N
218	Rick&Morty	234	f	3	\N
220	Rick&Morty	236	t	3	\N
222	Rick&Morty	236	f	3	\N
224	SouthPark	238	f	1	\N
226	SchoolLive	238	f	1	\N
228	SchoolLive	239	f	1	\N
230	SouthPark	240	f	1	\N
232	HorseBojack	240	f	1	\N
234	SchoolLive	241	f	1	\N
247	SchoolLive	245	f	1	\N
238	HorseBojack	242	t	1	\N
236	SouthPark	242	t	1	\N
240	SouthPark	242	t	1	\N
242	Rick&Morty	243	f	3	\N
249	Kaiji	248	f	2	\N
251	Kaiji	249	f	2	\N
245	HorseBojack	244	t	1	\N
243	SouthPark	244	t	1	\N
259	AdventureTime	251	t	2	\N
253	HorseBojack	251	t	2	\N
261	AdventureTime	251	f	2	\N
263	AdventureTime	251	f	2	\N
257	HorseBojack	251	t	2	\N
255	AdventureTime	251	t	2	\N
265	AdventureTime	253	f	2	\N
267	HorseBojack	253	f	2	\N
269	Kaiji	254	f	2	Thu Feb 24 2022 21:07:22 GMT+0300 (Москва, стандартное время)
271	HorseBojack	256	f	2	Thu Feb 24 2022 21:15:05 GMT+0300 (Москва, стандартное время)
274	HorseBojack	258	f	2	Thu Feb 24 2022 21:19:28 GMT+0300 (Москва, стандартное время)
55	Horse Bojack	39	f	\N	\N
57	Rick&Morty	51	t	\N	\N
61	Adventure Time	52	t	\N	\N
59	Horse Bojack	52	t	\N	\N
64	Rick&Morty	53	t	\N	\N
65	Rick&Morty	55	t	\N	\N
67	Rick&Morty	56	t	\N	\N
73	School live	58	t	\N	\N
162	Kaiji	178	t	\N	\N
262	AdventureTime	251	f	2	\N
75	South park	59	t	\N	\N
77	School live	59	t	\N	\N
79	School live	60	t	\N	\N
81	Kaiji	61	t	\N	\N
83	School live	61	t	\N	\N
85	School live	62	t	\N	\N
88	School live	63	f	\N	\N
90	South park	64	f	\N	\N
92	School live	64	f	\N	\N
94	School live	67	f	\N	\N
53	Adventure Time	38	t	\N	\N
96	Horse Bojack	68	t	\N	\N
98	Adventure Time	68	t	\N	\N
100	Rick&Morty	69	t	\N	\N
103	School live	70	t	\N	\N
105	South park	71	t	\N	\N
108	South park	72	t	\N	\N
109	School live	72	t	\N	\N
112	School live	73	t	\N	\N
116	Kaiji	76	t	\N	\N
114	South park	76	t	\N	\N
118	Kaiji	91	t	\N	\N
120	South park	117	t	\N	\N
122	South park	118	t	\N	\N
124	Kaiji	118	t	\N	\N
126	School live	121	t	\N	\N
128	Kaiji	123	f	\N	\N
71	South park	57	t	\N	\N
69	School live	57	t	\N	\N
130	School live	123	f	\N	\N
132	School live	155	t	\N	\N
134	School live	156	t	\N	\N
136	Kaiji	156	t	\N	\N
138	Kaiji	157	t	\N	\N
140	Kaiji	158	t	\N	\N
142	South park	159	f	\N	\N
144	Kaiji	159	t	\N	\N
146	SchoolLive	160	t	\N	\N
150	Rick&Morty	173	t	\N	\N
148	HorseBojack	173	t	\N	\N
152	SouthPark	175	t	\N	\N
154	Kaiji	175	t	\N	\N
156	SchoolLive	176	t	\N	\N
158	SouthPark	177	t	\N	\N
160	SchoolLive	177	t	\N	\N
169	\N	178	f	\N	\N
164	Rick&Morty	178	t	\N	\N
167	Rick&Morty	178	t	\N	\N
171	all	179	f	\N	\N
173	Rick&Morty	180	t	\N	\N
177	Rick&Morty	181	t	\N	\N
175	AdventureTime	181	t	\N	\N
179	all	183	f	\N	\N
181	HorseBojack	186	t	\N	\N
185	SchoolLive	201	t	\N	\N
187	SouthPark	205	t	\N	\N
190	Kaiji	206	t	\N	\N
192	Rick&Morty	207	f	3	\N
196	Rick&Morty	224	t	3	\N
198	Rick&Morty	226	t	3	\N
200	Rick&Morty	228	t	3	\N
202	Rick&Morty	229	f	3	\N
205	Rick&Morty	229	f	3	\N
207	Rick&Morty	231	t	3	\N
209	Rick&Morty	231	f	3	\N
211	Rick&Morty	231	f	3	\N
213	Rick&Morty	231	f	3	\N
215	Rick&Morty	231	f	3	\N
217	Kaiji	233	t	2	\N
219	Rick&Morty	235	t	3	\N
221	Rick&Morty	236	f	3	\N
223	Rick&Morty	237	t	3	\N
225	HorseBojack	238	f	1	\N
227	SouthPark	239	f	1	\N
229	HorseBojack	239	f	1	\N
231	SchoolLive	240	f	1	\N
233	SouthPark	241	f	1	\N
235	HorseBojack	241	f	1	\N
237	SchoolLive	242	t	1	\N
239	SouthPark	242	t	1	\N
241	SouthPark	242	f	1	\N
264	AdventureTime	253	f	2	\N
244	SchoolLive	244	t	1	\N
246	SouthPark	244	t	1	\N
248	HorseBojack	246	f	2	\N
250	AdventureTime	248	f	2	\N
252	HorseBojack	250	f	2	\N
254	Kaiji	251	t	2	\N
266	Kaiji	253	f	2	\N
268	AdventureTime	254	f	2	Thu Feb 24 2022 21:07:22 GMT+0300 (Москва, стандартное время)
256	AdventureTime	251	t	2	\N
258	AdventureTime	251	t	2	\N
260	AdventureTime	251	t	2	\N
270	HorseBojack	254	f	2	Thu Feb 24 2022 21:07:22 GMT+0300 (Москва, стандартное время)
272	AdventureTime	257	f	2	Thu Feb 24 2022 21:17:49 GMT+0300 (Москва, стандартное время)
273	Kaiji	257	f	2	Thu Feb 24 2022 21:17:49 GMT+0300 (Москва, стандартное время)
275	AdventureTime	259	f	2	Thu Feb 24 2022 21:20:45 GMT+0300 (Москва, стандартное время)
276	HorseBojack	259	f	2	Thu Feb 24 2022 21:20:45 GMT+0300 (Москва, стандартное время)
277	AdventureTime	260	f	2	Thu Feb 24 2022 21:22:36 GMT+0300 (Москва, стандартное время)
278	HorseBojack	260	f	2	Thu Feb 24 2022 21:22:36 GMT+0300 (Москва, стандартное время)
279	AdventureTime	261	f	2	Thu Feb 24 2022 21:24:57 GMT+0300 (Москва, стандартное время)
280	Kaiji	261	f	2	Thu Feb 24 2022 21:24:57 GMT+0300 (Москва, стандартное время)
281	HorseBojack	261	f	2	Thu Feb 24 2022 21:24:57 GMT+0300 (Москва, стандартное время)
282	Kaiji	263	f	2	Fri Feb 25 2022 01:31:02 GMT+0300 (Москва, стандартное время)
283	HorseBojack	263	f	2	Fri Feb 25 2022 01:31:02 GMT+0300 (Москва, стандартное время)
284	Rick&Morty	263	f	2	Fri Feb 25 2022 01:31:35 GMT+0300 (Москва, стандартное время)
285	Kaiji	265	t	2	Mon Feb 28 2022 22:33:22 GMT+0300 (Moscow Standard Time)
286	HorseBojack	265	t	2	Mon Feb 28 2022 22:33:22 GMT+0300 (Moscow Standard Time)
287	Rick&Morty	265	t	2	Wed Mar 02 2022 12:44:53 GMT+0300 (Moscow Standard Time)
288	Rick&Morty	267	f	3	Wed Mar 02 2022 18:33:18 GMT+0300 (Moscow Standard Time)
289	SouthPark	268	t	1	Wed Mar 02 2022 18:33:43 GMT+0300 (Moscow Standard Time)
290	SchoolLive	268	t	1	Wed Mar 02 2022 18:33:43 GMT+0300 (Moscow Standard Time)
292	Kaiji	269	t	2	Wed Mar 02 2022 18:50:14 GMT+0300 (Moscow Standard Time)
339	SmilingFriends	286	t	1	Sun Apr 24 2022 11:46:20 GMT+0200 (Central European Summer Time)
291	HorseBojack	269	t	2	Wed Mar 02 2022 18:49:57 GMT+0300 (Moscow Standard Time)
293	Rick&Morty	269	f	2	Sun Mar 06 2022 17:59:56 GMT+0100 (Central European Standard Time)
294	Rick&Morty	269	f	2	Sun Mar 06 2022 17:59:56 GMT+0100 (Central European Standard Time)
295	HorseBojack	270	t	2	Sun Mar 06 2022 18:04:11 GMT+0100 (Central European Standard Time)
296	Rick&Morty	270	f	2	Sun Mar 06 2022 18:05:44 GMT+0100 (Central European Standard Time)
299	HorseBojack	271	t	2	Sun Mar 06 2022 18:13:44 GMT+0100 (Central European Standard Time)
297	AdventureTime	271	t	2	Sun Mar 06 2022 18:13:44 GMT+0100 (Central European Standard Time)
298	Kaiji	271	t	2	Sun Mar 06 2022 18:13:44 GMT+0100 (Central European Standard Time)
300	Rick&Morty	271	f	2	Sun Mar 06 2022 18:15:53 GMT+0100 (Central European Standard Time)
301	Rick&Morty	272	t	2	Sun Mar 06 2022 18:28:26 GMT+0100 (Central European Standard Time)
303	Kaiji	272	t	2	Sun Mar 06 2022 19:21:56 GMT+0100 (Central European Standard Time)
302	AdventureTime	272	t	2	Sun Mar 06 2022 18:55:16 GMT+0100 (Central European Standard Time)
304	AdventureTime	272	f	2	Mon Mar 07 2022 12:16:53 GMT+0100 (Central European Standard Time)
305	Rick&Morty	272	f	2	Mon Mar 07 2022 12:20:54 GMT+0100 (Central European Standard Time)
324	Kaiji	282	t	2	Wed Mar 09 2022 19:41:47 GMT+0100 (Central European Standard Time)
308	Kaiji	275	t	2	Mon Mar 07 2022 14:13:44 GMT+0100 (Central European Standard Time)
309	HorseBojack	275	t	2	Mon Mar 07 2022 14:13:44 GMT+0100 (Central European Standard Time)
335	Rick&Morty	284	f	2	Fri Apr 15 2022 09:22:40 GMT+0200 (Central European Summer Time)
325	Rick&Morty	283	t	3	Sat Apr 02 2022 15:21:13 GMT+0200 (Central European Summer Time)
326	Rick&Morty	283	t	3	Sat Apr 02 2022 15:37:13 GMT+0200 (Central European Summer Time)
306	AdventureTime	275	t	2	Mon Mar 07 2022 14:13:44 GMT+0100 (Central European Standard Time)
307	AdventureTime	275	t	2	Mon Mar 07 2022 14:13:44 GMT+0100 (Central European Standard Time)
310	AdventureTime	275	t	2	Mon Mar 07 2022 14:15:08 GMT+0100 (Central European Standard Time)
311	AdventureTime	275	t	2	Mon Mar 07 2022 14:16:38 GMT+0100 (Central European Standard Time)
312	AdventureTime	276	t	2	Mon Mar 07 2022 21:04:45 GMT+0100 (Central European Standard Time)
314	HorseBojack	276	t	2	Mon Mar 07 2022 21:04:45 GMT+0100 (Central European Standard Time)
313	Kaiji	276	t	2	Mon Mar 07 2022 21:04:45 GMT+0100 (Central European Standard Time)
315	Rick&Morty	276	f	2	Mon Mar 07 2022 21:21:47 GMT+0100 (Central European Standard Time)
318	HorseBojack	277	t	2	Tue Mar 08 2022 10:50:59 GMT+0100 (Central European Standard Time)
317	Kaiji	277	t	2	Tue Mar 08 2022 10:50:59 GMT+0100 (Central European Standard Time)
316	AdventureTime	277	t	2	Tue Mar 08 2022 10:50:59 GMT+0100 (Central European Standard Time)
319	\N	282	f	2	Wed Mar 09 2022 19:38:58 GMT+0100 (Central European Standard Time)
320	\N	282	f	2	Wed Mar 09 2022 19:38:58 GMT+0100 (Central European Standard Time)
321	\N	282	f	2	Wed Mar 09 2022 19:38:58 GMT+0100 (Central European Standard Time)
322	\N	282	f	2	Wed Mar 09 2022 19:40:56 GMT+0100 (Central European Standard Time)
323	Rick&Morty	282	t	2	Wed Mar 09 2022 19:41:35 GMT+0100 (Central European Standard Time)
329	HorseBojack	284	t	2	Sat Apr 02 2022 21:57:15 GMT+0200 (Central European Summer Time)
327	AdventureTime	284	t	2	Sat Apr 02 2022 21:57:15 GMT+0200 (Central European Summer Time)
328	Kaiji	284	t	2	Sat Apr 02 2022 21:57:15 GMT+0200 (Central European Summer Time)
336	Rick&Morty	277	t	2	Sat Apr 16 2022 15:49:26 GMT+0200 (Central European Summer Time)
338	InsideJob	286	t	1	Sun Apr 24 2022 11:39:32 GMT+0200 (Central European Summer Time)
330	Rick&Morty	284	t	2	Sun Apr 03 2022 09:35:06 GMT+0200 (Central European Summer Time)
331	Rick&Morty	284	t	2	Tue Apr 05 2022 16:18:48 GMT+0200 (Central European Summer Time)
332	Rick&Morty	284	t	2	Wed Apr 13 2022 09:38:33 GMT+0200 (Central European Summer Time)
333	Rick&Morty	284	t	2	Wed Apr 13 2022 09:58:12 GMT+0200 (Central European Summer Time)
334	Rick&Morty	284	t	2	Wed Apr 13 2022 10:11:38 GMT+0200 (Central European Summer Time)
340	Invincible	286	t	1	Sun Apr 24 2022 11:51:20 GMT+0200 (Central European Summer Time)
341	Neverland	286	t	1	Sun Apr 24 2022 11:55:46 GMT+0200 (Central European Summer Time)
342	Kaiji	286	t	1	Sun Apr 24 2022 11:59:22 GMT+0200 (Central European Summer Time)
343	GravityFalls	286	t	1	Sun Apr 24 2022 13:24:10 GMT+0200 (Central European Summer Time)
344	InfinityTrain	286	t	1	Sun Apr 24 2022 13:33:00 GMT+0200 (Central European Summer Time)
345	CrossingSwords	286	t	1	Sun Apr 24 2022 13:34:27 GMT+0200 (Central European Summer Time)
337	Rick&Morty	286	t	1	Sat Apr 23 2022 20:21:15 GMT+0200 (Central European Summer Time)
346	Rick&Morty	286	t	1	Sun Apr 24 2022 21:29:34 GMT+0200 (Central European Summer Time)
\.


--
-- TOC entry 3644 (class 0 OID 0)
-- Dependencies: 210
-- Name: accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_id_seq', 286, true);


--
-- TOC entry 3645 (class 0 OID 0)
-- Dependencies: 212
-- Name: achievements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.achievements_id_seq', 1, false);


--
-- TOC entry 3646 (class 0 OID 0)
-- Dependencies: 214
-- Name: characters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.characters_id_seq', 30, true);


--
-- TOC entry 3647 (class 0 OID 0)
-- Dependencies: 216
-- Name: multfilms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.multfilms_id_seq', 27, true);


--
-- TOC entry 3648 (class 0 OID 0)
-- Dependencies: 218
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questions_id_seq', 293, true);


--
-- TOC entry 3649 (class 0 OID 0)
-- Dependencies: 220
-- Name: viewed_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.viewed_id_seq', 346, true);


--
-- TOC entry 3469 (class 2606 OID 16432)
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- TOC entry 3471 (class 2606 OID 16434)
-- Name: achievements achievements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.achievements
    ADD CONSTRAINT achievements_pkey PRIMARY KEY (id);


--
-- TOC entry 3473 (class 2606 OID 16436)
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


--
-- TOC entry 3475 (class 2606 OID 16438)
-- Name: multfilms multfilms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.multfilms
    ADD CONSTRAINT multfilms_pkey PRIMARY KEY (id);


--
-- TOC entry 3477 (class 2606 OID 16440)
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- TOC entry 3479 (class 2606 OID 16442)
-- Name: watched viewed_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.watched
    ADD CONSTRAINT viewed_pkey PRIMARY KEY (id);


--
-- TOC entry 3480 (class 2606 OID 16443)
-- Name: achievements achievements_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.achievements
    ADD CONSTRAINT achievements_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.accounts(id);


--
-- TOC entry 3481 (class 2606 OID 16448)
-- Name: characters characters_multfilm_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_multfilm_id_fkey FOREIGN KEY (multfilm_id) REFERENCES public.multfilms(id);


-- Completed on 2022-04-29 12:37:28 CEST

--
-- PostgreSQL database dump complete
--


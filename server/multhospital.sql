PGDMP  
    )                {            multhospital    16.1    16.1 6    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16475    multhospital    DATABASE     �   CREATE DATABASE multhospital WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE multhospital;
                postgres    false            �            1259    16792    accounts    TABLE     g  CREATE TABLE public.accounts (
    id integer NOT NULL,
    login character varying(20),
    name character varying(20),
    password character varying(20),
    test_passed boolean DEFAULT false NOT NULL,
    level character varying(20),
    email character varying(40),
    mailing boolean DEFAULT true NOT NULL,
    permission integer DEFAULT 1 NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false            �            1259    16798    accounts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.accounts_id_seq;
       public          postgres    false    215            �           0    0    accounts_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;
          public          postgres    false    216            �            1259    16799    achievements    TABLE     �   CREATE TABLE public.achievements (
    id integer NOT NULL,
    user_id integer,
    title integer,
    degree integer,
    viewed boolean DEFAULT false NOT NULL
);
     DROP TABLE public.achievements;
       public         heap    postgres    false            �            1259    16803    achievements_id_seq    SEQUENCE     �   CREATE SEQUENCE public.achievements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.achievements_id_seq;
       public          postgres    false    217                        0    0    achievements_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.achievements_id_seq OWNED BY public.achievements.id;
          public          postgres    false    218            �            1259    16804 
   characters    TABLE     u   CREATE TABLE public.characters (
    id integer NOT NULL,
    multfilm_id integer,
    name character varying(30)
);
    DROP TABLE public.characters;
       public         heap    postgres    false            �            1259    16807    characters_id_seq    SEQUENCE     �   CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.characters_id_seq;
       public          postgres    false    219                       0    0    characters_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;
          public          postgres    false    220            �            1259    16808 	   multfilms    TABLE     �   CREATE TABLE public.multfilms (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    serial integer,
    level integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.multfilms;
       public         heap    postgres    false            �            1259    16812    multfilms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.multfilms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.multfilms_id_seq;
       public          postgres    false    221                       0    0    multfilms_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.multfilms_id_seq OWNED BY public.multfilms.id;
          public          postgres    false    222            �            1259    16813 
   multoffers    TABLE     �   CREATE TABLE public.multoffers (
    id integer DEFAULT nextval('public.multfilms_id_seq'::regclass) NOT NULL,
    userid integer,
    multfilm character varying(50),
    description character varying(1000)
);
    DROP TABLE public.multoffers;
       public         heap    postgres    false    222            �            1259    16819 	   questions    TABLE     �   CREATE TABLE public.questions (
    id integer NOT NULL,
    level character varying(20),
    question character varying(100),
    newcomers boolean DEFAULT false NOT NULL,
    multfilm character varying(30)
);
    DROP TABLE public.questions;
       public         heap    postgres    false            �            1259    16823    questions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.questions_id_seq;
       public          postgres    false    224                       0    0    questions_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;
          public          postgres    false    225            �            1259    16824    questoffers    TABLE     7  CREATE TABLE public.questoffers (
    id integer DEFAULT nextval('public.multfilms_id_seq'::regclass) NOT NULL,
    username integer,
    multfilm character varying(50),
    question character varying(200),
    answer character varying(50),
    false1 character varying(50),
    false2 character varying(50)
);
    DROP TABLE public.questoffers;
       public         heap    postgres    false    222            �            1259    16828    watched    TABLE     �   CREATE TABLE public.watched (
    id integer NOT NULL,
    multfilm character varying(40),
    user_id integer,
    viewed boolean DEFAULT false NOT NULL,
    level integer,
    date character varying(100)
);
    DROP TABLE public.watched;
       public         heap    postgres    false            �            1259    16832    viewed_id_seq    SEQUENCE     �   CREATE SEQUENCE public.viewed_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.viewed_id_seq;
       public          postgres    false    227                       0    0    viewed_id_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE public.viewed_id_seq OWNED BY public.watched.id;
          public          postgres    false    228            ;           2604    16833    accounts id    DEFAULT     j   ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);
 :   ALTER TABLE public.accounts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            ?           2604    16834    achievements id    DEFAULT     r   ALTER TABLE ONLY public.achievements ALTER COLUMN id SET DEFAULT nextval('public.achievements_id_seq'::regclass);
 >   ALTER TABLE public.achievements ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            A           2604    16835    characters id    DEFAULT     n   ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);
 <   ALTER TABLE public.characters ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            B           2604    16836    multfilms id    DEFAULT     l   ALTER TABLE ONLY public.multfilms ALTER COLUMN id SET DEFAULT nextval('public.multfilms_id_seq'::regclass);
 ;   ALTER TABLE public.multfilms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            E           2604    16837    questions id    DEFAULT     l   ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);
 ;   ALTER TABLE public.questions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224            H           2604    16838 
   watched id    DEFAULT     g   ALTER TABLE ONLY public.watched ALTER COLUMN id SET DEFAULT nextval('public.viewed_id_seq'::regclass);
 9   ALTER TABLE public.watched ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227            �          0    16792    accounts 
   TABLE DATA           m   COPY public.accounts (id, login, name, password, test_passed, level, email, mailing, permission) FROM stdin;
    public          postgres    false    215   J<       �          0    16799    achievements 
   TABLE DATA           J   COPY public.achievements (id, user_id, title, degree, viewed) FROM stdin;
    public          postgres    false    217   �L       �          0    16804 
   characters 
   TABLE DATA           ;   COPY public.characters (id, multfilm_id, name) FROM stdin;
    public          postgres    false    219   �L       �          0    16808 	   multfilms 
   TABLE DATA           <   COPY public.multfilms (id, name, serial, level) FROM stdin;
    public          postgres    false    221   hO       �          0    16813 
   multoffers 
   TABLE DATA           G   COPY public.multoffers (id, userid, multfilm, description) FROM stdin;
    public          postgres    false    223   �P       �          0    16819 	   questions 
   TABLE DATA           M   COPY public.questions (id, level, question, newcomers, multfilm) FROM stdin;
    public          postgres    false    224   Q       �          0    16824    questoffers 
   TABLE DATA           _   COPY public.questoffers (id, username, multfilm, question, answer, false1, false2) FROM stdin;
    public          postgres    false    226   �U       �          0    16828    watched 
   TABLE DATA           M   COPY public.watched (id, multfilm, user_id, viewed, level, date) FROM stdin;
    public          postgres    false    227   �V                  0    0    accounts_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.accounts_id_seq', 297, true);
          public          postgres    false    216                       0    0    achievements_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.achievements_id_seq', 1, false);
          public          postgres    false    218                       0    0    characters_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.characters_id_seq', 78, true);
          public          postgres    false    220                       0    0    multfilms_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.multfilms_id_seq', 45, true);
          public          postgres    false    222            	           0    0    questions_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.questions_id_seq', 293, true);
          public          postgres    false    225            
           0    0    viewed_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.viewed_id_seq', 413, true);
          public          postgres    false    228            K           2606    16840    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    215            M           2606    16842    achievements achievements_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.achievements
    ADD CONSTRAINT achievements_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.achievements DROP CONSTRAINT achievements_pkey;
       public            postgres    false    217            O           2606    16844    characters characters_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.characters DROP CONSTRAINT characters_pkey;
       public            postgres    false    219            Q           2606    16846    multfilms multfilms_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.multfilms
    ADD CONSTRAINT multfilms_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.multfilms DROP CONSTRAINT multfilms_pkey;
       public            postgres    false    221            S           2606    16848    multoffers multoffer_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.multoffers
    ADD CONSTRAINT multoffer_pkey PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.multoffers DROP CONSTRAINT multoffer_pkey;
       public            postgres    false    223            W           2606    16850    questoffers offers_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.questoffers
    ADD CONSTRAINT offers_pkey PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.questoffers DROP CONSTRAINT offers_pkey;
       public            postgres    false    226            U           2606    16852    questions questions_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.questions DROP CONSTRAINT questions_pkey;
       public            postgres    false    224            Y           2606    16854    watched viewed_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.watched
    ADD CONSTRAINT viewed_pkey PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.watched DROP CONSTRAINT viewed_pkey;
       public            postgres    false    227            Z           2606    16855 &   achievements achievements_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.achievements
    ADD CONSTRAINT achievements_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.accounts(id);
 P   ALTER TABLE ONLY public.achievements DROP CONSTRAINT achievements_user_id_fkey;
       public          postgres    false    215    217    4683            [           2606    16860 &   characters characters_multfilm_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_multfilm_id_fkey FOREIGN KEY (multfilm_id) REFERENCES public.multfilms(id);
 P   ALTER TABLE ONLY public.characters DROP CONSTRAINT characters_multfilm_id_fkey;
       public          postgres    false    221    219    4689            �      x��;K��6�k�}�
�ErW����t�ï��xы	~$Jd!Q�������:z�W�w��L 	B�y�*$�L �?$>/��7��ض���|X����_�|QT^����d���6�o�7��G축���ߥ꾞AUǻ|�زCY���OUB��q��C]�ϡ,�[3�C���!I���@=�� ��,f�n��c��41�H�YYTE	����N� ��6�@�F�n�(+(�$��:P��X�{�[����Z�ͅ쳴�>mX�b�(�q���(EIE!�[��ܲ���a�0�ܐ��q��J��B�ck̈�C�fCʆ4���=3s��l��{<$+F#�v�^����p�g�q�{��G$�\[F��G�Ȕ�PA�z�ڟ@!ͩ�ؠp���j������@EJw5d��o%�E!�B
p�B+��������z��]�k�U,J����*-��²��ROj��6�D�����X6Pk�`��t�ЪQ߄/�H��]�BE�i1�/5�9�My����>In)��Zڨw���k��T�
^��XV���+��6,͏�ڟrB�R��E�Z��������!����]�&�6ۓ!�����`v	�U�d=�d��A�w�z�1�K�%r�M@K6"{Un�l��n��LG>��@N%�>6b��\�ԁ�+M���o��=�#��P�r8M���M���ӓ�L: Z�GL��h 0���������8
���FL&���R�f�oLgr�b���1�*��L`0�R�ǖ�7�+�Yt��FW����<e��=3=.��l���R2��2�^R�8ؒ��x�0+�i���P��E1�x���Q�+F"mc�Ea���l�?�ou<_���. �+���o_��k_�طT��������4
=����*��s�0")Q�NIf��`R{�d�r��d�8~�� B��r�M'!�����G�����>��F�Mr-���t�gG�$b3����K�����vl�K�8�B���M@ <�(���ע�6�*#�P�`1%�6'��S��$J�L��B�<�����,g&ڮ��|��-T�!�h�nW����WJҕ Y����G��0��6I0�@05_AcWur-�-R(�z�t23Ug[��	�zf���Iu�"��\��+���M2�X�ѭ����5��I�V�N9��l��R�q�`�D�0��c�Zp}����liX%Ր���W~Ρ+TB���Vf���(td�@�-�S�v*W3����"$kV�0�,
��?�������z��t�CYJ�;��ܞ|=/�M����2,q�+1�T	'f�Z�j��oh�E���a����I�1����
�f��
���2�/�g䘥�̌Fy��\	��SzTP�B\U����d�>W���S��>>2K�f�f�����&��KV�G�qUژ1�����l���M> -H�ap-ĕUicz��g��>}�*]����?�y;}�N���7^:!w�&�6I����|t�6I�*�a��K31_�����`#{&;�.�B��O�Y��^��	i��[��__�׫��C�r��%-�F�M����#v�쏗�eUژ�eXa�
t�y6p�������V��9�Y`���nkR�5'Z}�J3�5����+�y4�a�j����"�c%M;Ձ�6p�Y�D���>�Fs��w^l��|����M����� �Hv����M�#OG0�e�N@v>�q���UY ����Y���y�mAj�k��vB�-/Nf-��w^�]m��%=�e�'tfVG�M��T+Y�l?��5< -m@�+g	�Zv 3�1�}�w v���� \��l��5w v�sW?��,���4x��%p���l8��%��P ?�`�:w�~�eI�����	-�v�9�2�W�χ��k�
'%�TQ<���R?>d�*��2� ��rH~�ywf����!�԰��Gވ|x�P���Վa�s|X����x�*-Na�]B@��/��)?�p�Y
b�b̪}���+�Q	ܗ�Gh�q k����~~ .��L�j�r�._���X��.X���^��JƆ���ČT�J.�x[T���z��yY�!��ݎ���	Y� ޚͪ\E�8�m�������òQr�*�<�=���m'm��wӧ�	�5�ovܳ>\��e� �G>%�񝗥G�<��r�8��.\���a�^P������@ق�Ϡ}1���M����*�}�v��6�=L�[���6�3��B�Ja��7��*���~����`��&mI��~˾�LM�	�K��t���	�D[_Ҏ�m�$�'�?��=Z���iуB���uMԾ�������:��y!����6R�g�+9��(������	�6�9��B�_��+�a��ZQuhi�PD��������x"CAڀ}I�u���a���
�1/��mMw h��
P��.I�~`3�L�24��7��y�h9|x��IN��Ӷ���M��y��XI(�=�g��o�h�j��WFl�ϫr`��M�:��I���B�2���N	�ܻ,��{�!��}-c��`9ht�*�
�/Č����@o Kf	)Q�����S��ո�liO?��M�r� �p)�sq.g���j��P��.�~�w�4q���/����k�����O��s��CڗY!H���2�㥼�j�g$w��q�;܀T�~H����� �>`&M(�ۀ��f"?��#X�t����ʰA"����0�vk�C$��PW���&��az� ��I�I��)q�t�x O�F��;�W�v~��N�hU"Q�S��)CV[W=X;�qC�RK��h`��1�9m80���c��NfC/�Rγ�w��0�m�`�>d��q�C������;�T�N��[�䁢>�N�b	���8�"�tJ6�5w���̉Ͱ��-q�j&�5y>t�2!����.�;`Gk�0�Z���v�o��1� }��Ȅ���KA˅�]���{x����t�B��N��A#t2yjp"wNb�[4��?w�"���w�SZal�F�Tq�
�X�$������(�C��Fx_֧�BOP����\��%��|�8�	�*\�g��"[I�c9���"�����f���٠G)�^H¦����d퐝t׼[�Ja�::N7��ޕ,fĻ(tt��{�|��s�@04�0�-�yё�lMO�8V�UEx���SA$�0:��u��.f�2�㾽3�4���|Q ݄pq���m���80�8d a��hh(f`{l� ʭ&Xx�1m%�ɾ��?���0�z��I��)ʊ?�:Q�� r�{�U�NMlB��!n�2݈ �h�8����������o����ۯ%H���\1o17�B�M� ;u��D^v%�7�AGe�u��h���x�65�a�R�����@��I"��������~��~ι,����9���v�aw��\�i0�C\�L�<�m�EiX�"���(��%���W����_o�����]Y��Pӵ��#�`wyikc�y4o,��R��$�jS�z$t����)gm��ymjL���PU'��?5͉��r,{���"r;���a��=U���?��w���i�ͽՠ)�W�L|�>�B�����.#��~ _��4e�>���-J��,$3�x�6�����!��0-�Z�Y�JX����o[��?�����y�|G�M���q�GX�� �ʽJ��NY�`v��;~�E4D�^q�»��Oy��N�Wԁ�?H�+�~��l=��g�6�� �yA>�VB�Y	�[Ɨ�\��<��&����}�a�d=��f_o}
Cfsq���nBNqH_R�Qx���8uAgmz��컶ٳ����R��� J����O��VT�>��N@��	��n�	�
v8zM�����g�g���AԠ9-��\Ҹ���y�ȣ�*?��翿�����}&qU3�z�������쀦�MB���UN3T�b��]R0ԓ>BrZ�k���(��V�I 蒟�-��I�m�������������=�<m F   S��.��^��x�?��E�ᰌ�)54��J�l�@��u&c��JB����L�?�����\z���_|�o��3      �      x������ � �      �   �  x�-��n1��g�Z�.KBӄ��@U��@pw׎��j��=C*q����9��������}p	��)O���W�.����܎��ҧn�.�>�����n$�A��+´>��4�
�Ԛz�H񭏗s�yk�%�%�Ol
�h%���ϑ����1K'ߧ�
���k�|�����W�TT�n���Sv�M�~l*KZ$�3����Ù�ʚn���%63U?���އ�����OC�k,+5�al��#�R�?����o��;6-kٻ�K�����e����+��]m��?�W���4��P���&Z�{�8\���|\�$��ʇ#W(I�9�,��[��j?�녫p��8\5'���_��Y�.�F�wX>A����D\S]B��4~����C��1%�J���洈�����+�-���0��xM�n�IHٝϘ��O�ls__oNr�4ֈ��;AM��r�n��:�p�Vd��׋dI�T*V��M�b��h,��i�"zӾ�V�W�'��u`�.�_��Sd[\9�7�(=���,�[��s�jQxN/>e���]rG����cH�U\�oذU�1<[L��UL�s坾7n���KǭQ����&�w��_��v����(٢dC��[��:�x���n���v&Y^|Ͽ�0�?��      �   j  x���r�0E׭�r��Z2��M*�̦��ch�$A��O+K].�o�޹�=��X�f����}aw�2��j�����BOraḴY ׊��,�ҟ����C!X���XK�v	�H�{zvg=��5�3F�z'3k8�L~@镡_wP�M�]�J�$�j����-m��8�ɽ�`��g\�0��-4n@_��.p� {mfkh�7��rp=�U�6��'�U�� �ߝ+�Xph����(��==Iy^B ��l���o�oJ�&��/V=���?�B`�l���Ӫ�d4#V�I4��������3���<�gT-�P҂�U�"V�ȁTJI����P��>&O-�I�5�1?�~�)      �      x�31�427�L,NIL�LLR�\1z\\\ R�C      �   �  x�u��S�8��s�챣��؆��v��i/��D����	���Wr�I��w��%X�ex�\��ב��6.�7a���׮�K.�B.~K�w��:�5>�&T-��W�_�u��S����v���Gx�KY�È(>�8\����H�@<�\|����nWf����z�E�9qŅo�����^��0��n���x�{[��������.t~1��c��C�1��Mw��xn2��u�T$1&��_ݬ�É�?C�	���5VU�������:+u8j5��¾���mq�D~oy=|��<*�����7/E/r������3���z;����,�|��N�d�0C�%��M3�8a�0I�Io�4K���ȧ��M=�����%����כwJ�f喔��e�E�P�����y��淘a��N� LvrLf	ss��0N� LV���shB�p��n��*4
���18
�Bu�2eP(h
g��E�R7ì(X4,�C�3X8,	K��+���4W�jR��TG�`�rR�����ω*R5��TK��T2R9��TIjEW�TGi�H�
R%�ӎ���D���&��PSh(�:��S((�N����BC������BA��p�=��(�s��	/�
�.�s�>�i�k}1��q�L�Ǎ��������mߥ]�|>����ڡ�fkN�:�i?�z�۾H�\���9����������OK�7��i�|�^S;yC�>�Qi�=����Y�:�	��Y}M�����6�i�:��S((�N��a�ܨt	�[�+��x	�Y�t+A��K0%�\���K%��[��]�)����A0V/A� K��~z�ޅaY7ML��k���h�8.�K��*\��p��.p\ ����X������]2�� .������M�G_�6��F��`Qp T��@A�p2���F��`Qp (�GA� Q8�σBA�`P�(84C�� P�(L�}�w1�g��׮O�vB+X4,�C�0X8,	˴�gE��a1�XX*���a�HX�;`V,��š�,��e��9�˾n�ʏ��(�ϲU^��b�����WW�n�o�&C���}�}X��@�+���'���c�5_�.=:��%�>�x��/��d��n;<����?,����c<.      �     x����N�0���SxbD�+3��f�Q���"�]�x���$}��7�)���������`=�E]^ǃ��t8��l�L����:f[?B��`1y���7�'�Պ*=�#O�ؓ�<�O�ԏv�"�(.����軙�
]�<��Yzc��+w��72�v#%���#׼�\K)3k8��1�έ�&~���in�^�]rc��;��;�H�A��B��5��V�$�XBh!T@V��32�Wῇ�^�����G]�+�� gl(�      �   +  x��[�n$�]�|E��	���ؙ�'�Ȉd�M�T3ӞV��j������#�����G!���{Y�R1jZ<��K��VI��o�O�9Y�7�����۷��T�_V�v���w�ŧJ�j�C�zyy�.7��vv>�j��� ń R�q`��xy!�Ԡ���0|@-��6��敌�iV��n7g��������j��z~�VTC��:}��@D�~������1h�e��)��A�ℹ9�t,�d@@
�8� K�YD���  #P�^2�
�*B8E �(�F��eh�)mr�@a��"d4$&��~��fi��a9"����6��'�i�*�G�� J�B� ��A�}�4�z�of�q D��hD�Ms����a���
@(�lQ'�~|���QJAv��{0�#����k�r��T2���ǭxP�(���q�̅�f�O��$�L�J!?���5�-I
g� �b���^�2)� ׀��VZAV�I�~��;��VwڤP����Bn�w�|Ϥ��gF�3��y��5p�O�K����U��ݵ���ANO'��~gkLh�������R�	B�,aħ���-���=�f�1�����!~���EDQ�$�c0BCJ��""�$��0�D B�D�B�R$�p���Et�%��'@&H��MЀ�����gg)B�87��܈�1៞u���F]l8 �972-�����Q8&�������D@�U��+��`��qĔ@!Rt��og��w3&f�06c�&�v��>9�=��~����ׇ���������Ï��~����������_��n�mz�a��������i�ʍEeM����X&;���y�XR&��AT��S	ܛLT$4v�A�j4tm8�ذ A���#=�2h*���t�+V�`��[P�1aG,Z��0�� / L�] "0���G�f���x*�3���N2h�s@Nz����d�=�&A����4�#0A� ����
�i�L0q	h��lT8H�d�6X�硱	��
V�������V���
��+��@�9	I��3.�Q�-C���j� ;a�w����B䭅�[��+�$j���	���(ƨ��	��M<	�+z�4� ˖G VQD�*�Z�d��j+Y�*.S^q�e5��":Uف�f�7�"<��,�{\�y�U4<��hV�'�G�	
;�K�יM� )���X�F��S�D��ns��&@ϥĈ�� :\et�Ḧ́����CA#�xI"�8T�*4�l�RY�1�1?� �V��xN�?��:��u-��F�aΞs��������=�Jf�9���)���\=m�d'?�X��hv4QK�����%q��:O�������(r7
�5w�i��$�(�:���?m[�'�*|�Z�F1�)r��R{���X}?;�4��f}�YCO�T��b����{{9;i�3�㎏�Z�5�'�a��v�r�g||�L�C����4C'&�g�}8_��p�L-IMţT�K���b���a����X'����]�^^�Î��ʕ�'�_�Ҷn�?߮W�m����^]��fZ*��
�KE�U�C���=����ۗnz8ДY<s"x�;�Ԧ&�����&M혥�HẺ��44�ԃ�����E��Hy�35ͥ��P�&2c��df�d�q4i����.Zʜdu>b)kZF>pl�u���LG�é@Ui�e���S��hq�+A/VPu�!��UN]n\��E���c�{�x��׈�j�B{Uc����^�]d�5��7��/e�x�D^��x��:s����x�t`�G�eML��e���y��(����fA�:�<y�wL�X��H��9u��yoVZ�hb��+pg�n���PⅧ�E����íxD��Ο��1r��sw �bF��H���a�PP$գ'(/�饵;���x/�\��GǠ
�:��G��h5��3u��;��tjn���7�����ݘg䎖ВTJ���R��SH��C��t�{��N�FM/;����I�w��|"�t��$�b
�+�~�
� �[w����ݢ[���!pA���]�^��=J�,n�r�e�҆��I��z�n���W�b1r����(-Ɂp�}?_:��u3_�Qs^�jY}�^��̗ξ_�Ǯ���.Xj�����5�_j�qu_]Ĭ�&�z�SV�d�??Z�]��7QcG#��n48���<���ɁP7�{P�ꠣf����
V�Do��G;x�fv7���)*���>o�7v�މw����s���������Q~/��c9���H���>I�u\�+MZ���p�<��V�n݊h��<���D� 5��U�{O�ŧ��V;����'x��%#�g�v�]������A1�ߎ��	��`�=�	o'Ѫ�[���Ez����}���v��99^�]3P#ܬH`+|��x]~}}�Ϋ���� �_�zl�D�ƅ=ǻ'��e�G�eA���yfN�̆�u15+�A�T/�M���F��q��)EM
&��ߗ�fَr��^��</FYKv��թ[����e�|$%7؆V_�o����f��r��(�N n6N��.��f<lY˂�����М�:o���噔�L��e�ͭK�ɣ�PC�����U�v������ᛅI̮�7Kw�>.+(?FV���fqv�\<�KJxu�e��?6e%G������v}����򑼖?�L��*r�ξ�4��W˗��on�-Ya���E�>��^��7�8�(rF�4~��o���+��g��$��{��ۀ���]�-�� ��uG'��aAHr(�2���a���-9�m�G��$LU��֢�.�h#�����|G8JL�oAd�:�����%�w�=D�E}�R�P�T��g��(�F�oA1��x߸bF�{��S��.h�!������.�����FL���u��3��:z��������.7ƭ���̃��.`���BS�5� Ï"�Y{���X *�c�rc9�'*84(�;ɊKxC5)+���ŋ��Z     
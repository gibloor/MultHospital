PGDMP                     
    {            multhospital    14.2    14.2 6    C           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            D           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            E           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            F           1262    16394    multhospital    DATABASE     W   CREATE DATABASE multhospital WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE multhospital;
                postgres    false            �            1259    16395    accounts    TABLE     g  CREATE TABLE public.accounts (
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
       public         heap    postgres    false            �            1259    16401    accounts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.accounts_id_seq;
       public          postgres    false    209            G           0    0    accounts_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;
          public          postgres    false    210            �            1259    16402    achievements    TABLE     �   CREATE TABLE public.achievements (
    id integer NOT NULL,
    user_id integer,
    title integer,
    degree integer,
    viewed boolean DEFAULT false NOT NULL
);
     DROP TABLE public.achievements;
       public         heap    postgres    false            �            1259    16406    achievements_id_seq    SEQUENCE     �   CREATE SEQUENCE public.achievements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.achievements_id_seq;
       public          postgres    false    211            H           0    0    achievements_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.achievements_id_seq OWNED BY public.achievements.id;
          public          postgres    false    212            �            1259    16407 
   characters    TABLE     u   CREATE TABLE public.characters (
    id integer NOT NULL,
    multfilm_id integer,
    name character varying(30)
);
    DROP TABLE public.characters;
       public         heap    postgres    false            �            1259    16410    characters_id_seq    SEQUENCE     �   CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.characters_id_seq;
       public          postgres    false    213            I           0    0    characters_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;
          public          postgres    false    214            �            1259    16411 	   multfilms    TABLE     �   CREATE TABLE public.multfilms (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    serial integer,
    level integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.multfilms;
       public         heap    postgres    false            �            1259    16414    multfilms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.multfilms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.multfilms_id_seq;
       public          postgres    false    215            J           0    0    multfilms_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.multfilms_id_seq OWNED BY public.multfilms.id;
          public          postgres    false    216            �            1259    16508 
   multoffers    TABLE     �   CREATE TABLE public.multoffers (
    id integer DEFAULT nextval('public.multfilms_id_seq'::regclass) NOT NULL,
    userid integer,
    multfilm character varying(50),
    description character varying(1000)
);
    DROP TABLE public.multoffers;
       public         heap    postgres    false    216            �            1259    16415 	   questions    TABLE     �   CREATE TABLE public.questions (
    id integer NOT NULL,
    level character varying(20),
    question character varying(100),
    newcomers boolean DEFAULT false NOT NULL,
    multfilm character varying(30)
);
    DROP TABLE public.questions;
       public         heap    postgres    false            �            1259    16419    questions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.questions_id_seq;
       public          postgres    false    217            K           0    0    questions_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;
          public          postgres    false    218            �            1259    16495    questoffers    TABLE     7  CREATE TABLE public.questoffers (
    id integer DEFAULT nextval('public.multfilms_id_seq'::regclass) NOT NULL,
    username integer,
    multfilm character varying(50),
    question character varying(200),
    answer character varying(50),
    false1 character varying(50),
    false2 character varying(50)
);
    DROP TABLE public.questoffers;
       public         heap    postgres    false    216            �            1259    16420    watched    TABLE     �   CREATE TABLE public.watched (
    id integer NOT NULL,
    multfilm character varying(40),
    user_id integer,
    viewed boolean DEFAULT false NOT NULL,
    level integer,
    date character varying(100)
);
    DROP TABLE public.watched;
       public         heap    postgres    false            �            1259    16424    viewed_id_seq    SEQUENCE     �   CREATE SEQUENCE public.viewed_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.viewed_id_seq;
       public          postgres    false    219            L           0    0    viewed_id_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE public.viewed_id_seq OWNED BY public.watched.id;
          public          postgres    false    220            �           2604    16489    accounts id    DEFAULT     j   ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);
 :   ALTER TABLE public.accounts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �           2604    16490    achievements id    DEFAULT     r   ALTER TABLE ONLY public.achievements ALTER COLUMN id SET DEFAULT nextval('public.achievements_id_seq'::regclass);
 >   ALTER TABLE public.achievements ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            �           2604    16491    characters id    DEFAULT     n   ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);
 <   ALTER TABLE public.characters ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            �           2604    16492    multfilms id    DEFAULT     l   ALTER TABLE ONLY public.multfilms ALTER COLUMN id SET DEFAULT nextval('public.multfilms_id_seq'::regclass);
 ;   ALTER TABLE public.multfilms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    16493    questions id    DEFAULT     l   ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);
 ;   ALTER TABLE public.questions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    16494 
   watched id    DEFAULT     g   ALTER TABLE ONLY public.watched ALTER COLUMN id SET DEFAULT nextval('public.viewed_id_seq'::regclass);
 9   ALTER TABLE public.watched ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            3          0    16395    accounts 
   TABLE DATA           m   COPY public.accounts (id, login, name, password, test_passed, level, email, mailing, permission) FROM stdin;
    public          postgres    false    209   <       5          0    16402    achievements 
   TABLE DATA           J   COPY public.achievements (id, user_id, title, degree, viewed) FROM stdin;
    public          postgres    false    211   hL       7          0    16407 
   characters 
   TABLE DATA           ;   COPY public.characters (id, multfilm_id, name) FROM stdin;
    public          postgres    false    213   �L       9          0    16411 	   multfilms 
   TABLE DATA           <   COPY public.multfilms (id, name, serial, level) FROM stdin;
    public          postgres    false    215   *N       @          0    16508 
   multoffers 
   TABLE DATA           G   COPY public.multoffers (id, userid, multfilm, description) FROM stdin;
    public          postgres    false    222   �O       ;          0    16415 	   questions 
   TABLE DATA           M   COPY public.questions (id, level, question, newcomers, multfilm) FROM stdin;
    public          postgres    false    217   �O       ?          0    16495    questoffers 
   TABLE DATA           _   COPY public.questoffers (id, username, multfilm, question, answer, false1, false2) FROM stdin;
    public          postgres    false    221   hT       =          0    16420    watched 
   TABLE DATA           M   COPY public.watched (id, multfilm, user_id, viewed, level, date) FROM stdin;
    public          postgres    false    219   �U       M           0    0    accounts_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.accounts_id_seq', 296, true);
          public          postgres    false    210            N           0    0    achievements_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.achievements_id_seq', 1, false);
          public          postgres    false    212            O           0    0    characters_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.characters_id_seq', 43, true);
          public          postgres    false    214            P           0    0    multfilms_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.multfilms_id_seq', 45, true);
          public          postgres    false    216            Q           0    0    questions_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.questions_id_seq', 293, true);
          public          postgres    false    218            R           0    0    viewed_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.viewed_id_seq', 410, true);
          public          postgres    false    220            �           2606    16432    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    209            �           2606    16434    achievements achievements_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.achievements
    ADD CONSTRAINT achievements_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.achievements DROP CONSTRAINT achievements_pkey;
       public            postgres    false    211            �           2606    16436    characters characters_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.characters DROP CONSTRAINT characters_pkey;
       public            postgres    false    213            �           2606    16438    multfilms multfilms_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.multfilms
    ADD CONSTRAINT multfilms_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.multfilms DROP CONSTRAINT multfilms_pkey;
       public            postgres    false    215            �           2606    16512    multoffers multoffer_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.multoffers
    ADD CONSTRAINT multoffer_pkey PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.multoffers DROP CONSTRAINT multoffer_pkey;
       public            postgres    false    222            �           2606    16506    questoffers offers_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.questoffers
    ADD CONSTRAINT offers_pkey PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.questoffers DROP CONSTRAINT offers_pkey;
       public            postgres    false    221            �           2606    16440    questions questions_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.questions DROP CONSTRAINT questions_pkey;
       public            postgres    false    217            �           2606    16442    watched viewed_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.watched
    ADD CONSTRAINT viewed_pkey PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.watched DROP CONSTRAINT viewed_pkey;
       public            postgres    false    219            �           2606    16443 &   achievements achievements_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.achievements
    ADD CONSTRAINT achievements_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.accounts(id);
 P   ALTER TABLE ONLY public.achievements DROP CONSTRAINT achievements_user_id_fkey;
       public          postgres    false    3479    209    211            �           2606    16448 &   characters characters_multfilm_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_multfilm_id_fkey FOREIGN KEY (multfilm_id) REFERENCES public.multfilms(id);
 P   ALTER TABLE ONLY public.characters DROP CONSTRAINT characters_multfilm_id_fkey;
       public          postgres    false    215    213    3485            3      x��;K��6�k�}�
���~�mOw8���^H�#Q��"�쉘M�����Û�B�uf�H*�+V!	f��!�y�Ǿ�e����:��������e���.��=���/��}��ݶ�����A�53Ȣ�xWL[��jz��+(�/<��C�oj��׀��݁������"��v���<v�K���Ue]V�0!9>.�!`l�dk��F����@�i�=����5���5l�o�m��\�>�N���N,˰d'(�q����DEE)�[��ܲ���a�0�ܐ��q��Jv�J!᱋5f��!��!cC��� c���������=������a��#���p�g�q�{��G$�\[F��G�Ȕ�PA�z��A!��Ic��]�[��F�6�5(�9Ԑ��U���J)�	J� G�C�Ç�
2�׻�cv�V�(a�n�ߪ�S��3�H=��mؑ�Y���|����4�٠�U��	_��W�;�����bB_:)�7��V�$�� X;ke���C��ZS*x����/��`�lXVd�;���j����61�z3>C�3[�Q�&�6ۓ!��#���`��*;�=��'�	��e����k.��6U -و=�U��ѣ�Mh3�L
�9���؈�s!�wRNZ�2U��M�����GC��4��f4f�'#�t@������� `:�L��}�#�q�4�c���N&;���S�5٘����$�c�U�18��`6���-ao�W`��F�����q-y�r�{fz\Pm�Y%�d�eV��q�)U�aV
b�B��P��E9�x���Q�+Fbmc�Ei���l�?�ou<_���. �+�S��k_��k_�صT����ߕ���4
=�����*S��s�0"�P�NIf��dR{�d�r��t�8~�%� B��r�M�!k��5�����9��F�&�Vh��L:߳#g����f�ݥE�GU��;1��%pU)�a� 
�l��H�k�y�E����T���u�o�)Pk�%n&JSg�{S�VLQ�3mW�x>�N�*Őj4d�+�`��k%�Z��M݊b��U�@�$�F ��/����:��)�}=Z:����-�ۄ�U=3��ܤ�]D�-�/�$lcƓ�'�gt���m�)j��S�r;=%��s��#8�!�X�\�~�� <[VI5d��m蕟s��J��e���Ylg-��4{����݁����y�]�d��f�E���ў����S{���:��,����lnO���̦���� ��8�U�h��3�}�F�D�74��Y�0�{��$����Z%N�J`%N�T�W��ŗ�3r�J�fF��SԮ��)=*)e!�j��{D�[��{����g��M3m3|���h���%����*m̄�GP�rA6~z�&�	$�0��ʪ�1=�厳�l|�����.��`џր���>I'd������ݿ��M��3ݠM�@��o����L�� ,������Ȟ�N�����wC~�=jBZC6�������l���\�gI����wB6~����r��J31"��!lQ�N9�nZ�a|�2����1�1�c�����mM�ӑV߫��f�����h��Cئ���??���F��i�����=K�������x���΋M���>�� �IR����I��1��T;�l�^�$�ٍ?���^������;o�8P3\��Zo�xI:k�8���j�^.�a'�B8�3�:�Ehv�+��uA���{[���d�r�ୡe0��aܝv�nڿ7#���cv[8�; �����w^}�R������t� ��/�4�ϽX��ݺi�yY�%*q���pBK�aN���U9��a=�ڽB@�I�-U�L��v�ԏ��J��ž�rȢ���sѝ�����}HĨ5l!�瑟D1<u��q�j����9>�������[���® ������X�a��,��F1����x�˨�˛�tr k����~z .��L�j�r�._�ޛ�X��.X���^��JƆ���ČT�J.�x[T�K�zl�yY�!��ݎ���	Y� ٚͪ\E�$�m�������òQr�*�<�=���m'm�M��S�֚�7�l��]{�= ��C�e|�ei�1���v��*�,�K W%�k.��8����}$$P� �3h_�4|��&?��y����n��V�����c���RX���|c�J������/���AE�e�a��&��%�}������m.YǛ�O��#�����H��˴��	!Z䏺&j_ݍ8�����:��y!����6V�g�+9��(������	�6�9��B*^��+�a��KZQuhi�PD_�������x"CAڀ��"�ذ�Q�0COHc^�)J*ښ�@�ʷ�l]]�&���f8�[�0eh*Ưn�]�N�r����ٓ�:M�mS?P�����C��PJ{�eϠ�3� ��r"�6富*�P�W��J
B��u�+�
`�W� e0 ;w�:0�wy���ܧB�]�Z�(Q�
��U�ʭX���9��@��R����3�ޯ�qo�Ҟ~X����X��R���\��������#�]���)�i�8��q�_>O�Bw��3�Fu璝�Y_� �����X���2������u0�F��'��PA���}�L�P��1g�D~��G���`�3�1�a�DH���0����!y_��F`k�g�0=wH� t�$複X�񔅸g:�C<�'m����A;?�F'o�*����OԆ��!�����8���@�%��	40���
Ҝ6�Z�	�j'�j	)�Y@�;�j�6|0�T2�q��rX�!OH~}|ҝG*@'vD�-^�@Q�GN��BB�En:%���Z8��z��fXf햸y5�Ś<:X�����}W�0N�5uj�_�|;�7����L�>�ddBd��蕠����.S��=��x�n�����q��>h�@�C&ON�a�$�EcQ���s�*���$���
4:��+V  �"X��-h�M��xD���6����>�z��U���ҵ -Q�83�a7L@V�R�=s7�*�+(`��w�����D���gf���z!	�v�[�ۓ�Cv�]�nI*�M���8݈RzW��Gq��:0��k�P�:��Z�0`hna�[��#5���,p�8䫊6��=�ק�HPat>���]�9d��]{g�t
\��3��&t��c�p-lC�(ā��!	c�GCC1��`�@Pn5���OY+qM��_���|Co�ܝT�����S��(��e�9W�;5�	�s��mJ�t#h�-��o�[�o�x���oo�����_J�=��b�bn�B�M� ;u��DQu��7�AGU�uŴ}QB�U��0f�e����l�X�$1�@}���������o��\���z��p�jd�]}>�gL�0;�d[�xYֵ�`m,*}g	;~�~}���/o��yfW�x;�t-���/�]^چ�u�O�ȍ?J)Wf�j��}=�����T�6���6�&��~_�G��?�NG�������b���i�4SX��)��T�W����7����o���V��0^^�o2Q���K�#�o;��=��|a�� Д���\:�8�_������ϖSR���d�sl��xzHh�f1*a�▟Ǿi������v��y�{4�Ͼ���a����{(�*m��8e���3���E_x����?�;�6\Q�� q\����嗳����\ڌx���W,X	A�x��/Y�^�x>$VM.)w�����z��]��)���%��f�	9�!}�I]�F�	�3��]���aװo�ӎ}��������Q�oϸ-�{�嶢��YeveN�Uw;M�8T����k:�^��<�?;�F���h���Ɲ�G�F�W���>���o��L�3�����m(p�?L׸0/f4]a��N��r��R���풁��pPв]{�'D��"LA���mTOfn�ܯ���6Д,�>��u����Y� 5   ��t�v���O�C�\�k��R�Aӄ�ϗÙ�wb&�'9�����_|�o����      5      x������ � �      7   �  x�-��n�0��gf����-�j)MA�T��7C�ib9NW��wLW����l��qp�;�o���Z�	1MG��F������蜍�\
/m�~S5�#�+�ɑ�Zxk���v���gk��2�?}�:ƅX�D��8\Q������7)�R���:�9���X�Ǝ�)x{���ʀ����m�֣*�w�ʇ��amJ����.2��A���������P-@R7��}��ޢ�ec�<7�M+(a��U�+�F�&�C$��o79T�:�u��1�u����~����{b/�K��=���2�L�U~	
��YF���|f��H$lZ�eA#��B�ES��ㄦ�jmOh�"�,ÙT���]������$�'a%�p�o�
-���x}�a����?4<Qd��?�2D�      9   j  x���r�0E׭�r��Z2��M*�̦��ch�$A��O+K].�o�޹�=��X�f����}aw�2��j�����BOraḴY ׊��,�ҟ����C!X���XK�v	�H�{zvg=��5�3F�z'3k8�L~@镡_wP�M�]�J�$�j����-m��8�ɽ�`��g\�0��-4n@_��.p� {mfkh�7��rp=�U�6��'�U�� �ߝ+�Xph����(��==Iy^B ��l���o�oJ�&��/V=���?�B`�l���Ӫ�d4#V�I4��������3���<�gT-�P҂�U�"V�ȁTJI����P��>&O-�I�5�1?�~�)      @      x�31�427�L,NIL�LLR�\1z\\\ R�C      ;   �  x�u��S�8��s�챣��؆��v��i/��D����	���Wr�I��w��%X�ex�\��ב��6.�7a���׮�K.�B.~K�w��:�5>�&T-��W�_�u��S����v���Gx�KY�È(>�8\����H�@<�\|����nWf����z�E�9qŅo�����^��0��n���x�{[��������.t~1��c��C�1��Mw��xn2��u�T$1&��_ݬ�É�?C�	���5VU�������:+u8j5��¾���mq�D~oy=|��<*�����7/E/r������3���z;����,�|��N�d�0C�%��M3�8a�0I�Io�4K���ȧ��M=�����%����כwJ�f喔��e�E�P�����y��淘a��N� LvrLf	ss��0N� LV���shB�p��n��*4
���18
�Bu�2eP(h
g��E�R7ì(X4,�C�3X8,	K��+���4W�jR��TG�`�rR�����ω*R5��TK��T2R9��TIjEW�TGi�H�
R%�ӎ���D���&��PSh(�:��S((�N����BC������BA��p�=��(�s��	/�
�.�s�>�i�k}1��q�L�Ǎ��������mߥ]�|>����ڡ�fkN�:�i?�z�۾H�\���9����������OK�7��i�|�^S;yC�>�Qi�=����Y�:�	��Y}M�����6�i�:��S((�N��a�ܨt	�[�+��x	�Y�t+A��K0%�\���K%��[��]�)����A0V/A� K��~z�ޅaY7ML��k���h�8.�K��*\��p��.p\ ����X������]2�� .������M�G_�6��F��`Qp T��@A�p2���F��`Qp (�GA� Q8�σBA�`P�(84C�� P�(L�}�w1�g��׮O�vB+X4,�C�0X8,	˴�gE��a1�XX*���a�HX�;`V,��š�,��e��9�˾n�ʏ��(�ϲU^��b�����WW�n�o�&C���}�}X��@�+���'���c�5_�.=:��%�>�x��/��d��n;<����?,����c<.      ?     x����N�0���SxbD�+3��f�Q���"�]�x���$}��7�)���������`=�E]^ǃ��t8��l�L����:f[?B��`1y���7�'�Պ*=�#O�ؓ�<�O�ԏv�"�(.����軙�
]�<��Yzc��+w��72�v#%���#׼�\K)3k8��1�έ�&~���in�^�]rc��;��;�H�A��B��5��V�$�XBh!T@V��32�Wῇ�^�����G]�+�� gl(�      =   �  x��[�n#���}
]-Z����mRo���Am�7���gw��G�X��wI_�/ЇX�M���7*9Ґ�p4#��_�ďg����HR��_~���]=��o߸�R[����/��ˏ��Ū�L���nVwm=��_�d��D�bB )�8� ��H<�<�@j�OFp�
��߫�w�B��4+Ηw������B8���\.�������N��>Ѫ��6Gp��C�m\��0e|�` 4�!T�07琎��� H!�`�4�q4 �`$ J�KF Y�\E� �E����M?e�M��(lZ��F�����,��b>,G:��0hC�P`}�Ư�z�I� �-$M �����NSШ��f��B�_�F��4�?%�W B�p`�:A�����V�:P
��t߃A	ǐ�P\������Q�?=n�À�F��x�#pe.D�7;|R�%Y�`�@P¨�A�6��nIR8�� ����IY�hp�d���
��N����aL���&�j>�(�Vx�@���L�_�pf4:���#����}JXRn�}�ھ���0Lrbx:!��;#`XcB+��L�,�(F� ��NBg	#>�|��l�n�n4K���h�ȈX�6����~��QD�"
!��qFh�C�(�F1�$��0�D B�D�B�R$�p���Et�%��'@&H��MЀ�����gg)Bpn�}b�?=�%�64��p@"�s4ndZ^Y�۷�pL Ew��Qi����bc��<��� �#�� 
���k��p7;��Θ�1�،ђ������⏄2���?��X���q��O�������u��������_׿���|�~���������i��ʒȧ�%����X�d�)cI��V`Q}nOT$po2Q��ء2���е��c��3���ʠ�LW�F�	:4�X!�u#4oA�Ǆ-D�h���`��� 0	w��H�
�M̚M��v੐�@G28�4�i@�9e��dp6�U��dҋd�,`��0-���*,��G0�T�%��; �Q�| �O�A��`����B$t*X�B��Z���+d$B��ƣ	�$$��̸�G9�y�&B�G��AT�R�	B�X1n-����H���63!���[?V���'��AbE}�F6 dْ�(��*��^EQ��,Q�c%ˢ^�e�+΀�Q�.G����fG�7E�("G���2΃������0FG�z2x4@,��P���z�٤����A��m��<� J�<��vL��蹔�P�"q@��.R3��`&�P�$�F�+U�
�@"���<�T�j�rC�2@�p&�S�����i��0g�9��_ٱ�)�=�Jf�9���)2:+�z�h�N~ֱ�]���D)��F/��w��I?�X,<Ѧ����(r3
�%w�i��$�(�:�˛�?m[�'�*|�l6������q�=]�^.?��WUsU�W�5�TI5x:![[��W�Ӫ��w|��­!~ �j#,|��G�|Hptޘ�Љ³�>�/��;s����b/���z��7��"���ۂu��	��f��;��R(W�7��s~�J[[-f�k�7u���ﮯ�6�����`�ťb칱�U�C���-�.��ۖn�;ДY<s"x�;�Ԧ$��4��&Mv혥�HỶ��t,h�s���1�Ë����gj:�f*C�:�[���k'3s9����I�Hm�謥��@V�G,eI���M�.�����u8��M�L=��Ԭ�Z�JЋT�lH�p�Sg��q<iQ���X��>5��5"���^�X/���g	/�.2ΫU���2���@^��x��:s����x�t`�'�eIL��e��*y��(����fA�z y�*�ԱB�4�sjg���,�$��6wW��������Oi��ý�1I�[��ݝ?3�cdG��� �ZŌ�����a$SP$Փ'(��饵���x/�\��GǠ
�:��G��CЈ��p�9��Cx�0�݃3��J�Qs��)�jn�W����)/�-ˠ%�D�k�a$
w�[F&8���Lǻ�>�T�.�d�]�>��́x��A/?�W:?��_q�+�~�2� �[���r�vQO�Is�&��ś��n�nLҺ���1����wdQ��U[��W'�b1q?���+�Ɂp�}7o�E[͛)j�K�C-�/�����y�i�N]+9nQ2�����aϻ-jl�Ԝ��͕��ɛ���S^E��^�hERXt�x<�D��X,��@F jWyXFE�`6����DG�B�!n�e�b��b�v�*�lnFwP3�U.%~�}<�dolx���x��m�^�˻����9��^�(ҤEs����烘mqr�f����Y��"��+�T�8�
�� Z|�mo�SZ�e�Q)�_ �dg��L��Xʠ0��2c=(����0���L��5���A�j�V���"����޾���8�sr<'�fp�Op�,!��Q7��������8���E�׫��<���i�ë� ��tZ��v^��h�CsE�f�a�[�!�θ;�#�5>�&yy�"�2����2c�9"|t�3s��4l��Dg�dm���ժj���^�8N8�[G�+g/�˪�'9�A��?<>'Ys
��ř�t����n�d �B�����m�\~��յ��n��m�n]���>k.�j:lYʌ��]���N.��a_�IN̴8k�o�\BN�F��)�,_U������w�N��p��Φ��q�~O�,��Y�̛jq~S]��%9����j���,G�^\,?��ٻW˫=y���y�	Z�uq�\�iuUռ|�p{�'4g���	,����fy;_���"��Y,Z�nZ������)�t$���n^�<�8�_=�Y;�$�Gi���ϰ $9�'�E���؁N���6��q:	��*�g�kVMK�	^�SxI�V9ILs��Rg�S�pҡ����p˂���OR�J��������ä��(f��1�׮�������k�\4�]��o�_�-�׶�u���{�o���ŋ�uSS     
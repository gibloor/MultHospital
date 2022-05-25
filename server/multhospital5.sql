PGDMP         &                z           multhospital    14.2    14.2 6    C           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
    public          postgres    false    211   �K       7          0    16407 
   characters 
   TABLE DATA           ;   COPY public.characters (id, multfilm_id, name) FROM stdin;
    public          postgres    false    213   �K       9          0    16411 	   multfilms 
   TABLE DATA           <   COPY public.multfilms (id, name, serial, level) FROM stdin;
    public          postgres    false    215   �M       @          0    16508 
   multoffers 
   TABLE DATA           G   COPY public.multoffers (id, userid, multfilm, description) FROM stdin;
    public          postgres    false    222   O       ;          0    16415 	   questions 
   TABLE DATA           M   COPY public.questions (id, level, question, newcomers, multfilm) FROM stdin;
    public          postgres    false    217   IO       ?          0    16495    questoffers 
   TABLE DATA           _   COPY public.questoffers (id, username, multfilm, question, answer, false1, false2) FROM stdin;
    public          postgres    false    221   �S       =          0    16420    watched 
   TABLE DATA           M   COPY public.watched (id, multfilm, user_id, viewed, level, date) FROM stdin;
    public          postgres    false    219   �T       M           0    0    accounts_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.accounts_id_seq', 291, true);
          public          postgres    false    210            N           0    0    achievements_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.achievements_id_seq', 1, false);
          public          postgres    false    212            O           0    0    characters_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.characters_id_seq', 43, true);
          public          postgres    false    214            P           0    0    multfilms_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.multfilms_id_seq', 45, true);
          public          postgres    false    216            Q           0    0    questions_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.questions_id_seq', 293, true);
          public          postgres    false    218            R           0    0    viewed_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.viewed_id_seq', 369, true);
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
       public          postgres    false    215    213    3485            3   �  x��˒��E�`J$��m�ul�NR.o�rm���C�D�E�ѩ�%ߐp�)�K~a���� (����M��7 �}������c>,�o���o_�(*/`�4��t:7짿�Y�#��,я�I�}=�,����D�e�����OUB��p��١����,���н;2<�)^h��"��ֵcۍ�o�$D#geQ%\LH��;e�����}��RV�I;uu�>��X�{�Y����Z�ͅ�]�7��a����.n ��R��B�.�-��^L7�ց2�7��:�#V	�ݬ1c��.vl�e�n ٠�13z����C�b�>r�a/8ksb�/pM=t��@��d�k�}|�.�� X�O��95�BނXh08:)�(
**0�SԐ�����,) 
m ��C�Ë�
2�׻�c��?�Y&�0a/�ߪ�S�8�vh6�yvZ�a'�g5�ǲ�F�3T?���M���D���1T-T��V�R���T�Z�[���`���z;L�&kM}h�~Ĳ�?���r K�`�v�QV�SN(Q�s{/g����z#���#�;ۺQ�.�>ۓ#�����a��j�d=�d��A�w�z�1��K�%$r�M@K6bgUa�l�nS�L�>��@N-�^6b��Z�́�+M����h�j<��l��9���ʬ����b�i@'Dk��	y� 3�=`�
��(h��1�\vjK���%j�1�ɉ�I�� �`b2��l*,<G���W�F%IW�ߊ����<e��=�<.��l���
22�x3�^R�(lIFU�`���شP#6c!FQ�@4v#��8�q�H�}r�(����M�����P��ҍ� 8�8N����t�?��6�3u�ea�w'�%��'��be��'��"�JJT��GҀ�`(��79�\&��3�y)��A\���4d�j���BX��Gu��Ѥ�=�I�{v�Lcv0�l����a!PU���N�	�*�-0,�� �Ce�����p�:o���*r �JS�ns�m<� ZMr���Da�,t�c*ي)�rf���'���B�RIC~�B�*�R������(6>Z\�1~�I�I��z!ɮ��Z�[�P�5����f���0o�Su�4�k��vE�\��+Ұ�O:�X�ѭ���I4�hI�V�N9��l���R�q�@F"p8C�Rm�>����YVE5T���Ы8�Ё�:���_Vn���(�Ld�@�-oK�jW+��E7�7+G�U���Ĺ�{���|���:��.����jn/���̖���w����Xh��+�C��Z"����t��0�z��D��B��eV)����:�����}F�Y�ʬhTw��U�z>�G�,�U��|�H��ss����p��[�4�1Ç�6I̞�*?�����L(~%-d㧷g�h�@�!��Z�3On8����(:�tA6~ k�~�l���H:!?4�x�l���L�m�����y�m��U��I�nm��<��B�npN�����D� ٟq7d�zӣ�5d�o�Y~}Ο�N��iɕz�� 9�q'd���x�/�˪�1�����ؔ�l�Vc���.3��Zs���9�w�ݽ�I}֜h��jm�`6г;I>���٘߅m�y>��]���a�JZv��m�޳��{�s/��|o�؄�y���w@�$5����h�D����M�#ߍ����]�D>{���U[ ��K�ٜ��y�nAj�;�y��G2^��F<�o�,�ڲ��U.�PǬ�`�k�R�d]�r��6�p����xkh9�<�|����C��a�p9z������أ�C�X�q����}��.@�{���n�x��@��`�:�~�fI������	-�Sv�5�2�W�χ��s�	%�4Q2�����>>T����r�A��P�ty�1�^���P��Jl!�Ǒ7"Z��8��]؎v����x�j-Na�]BBy�?&�S~��ֳT�
�b̪����w.��/��0R� �<oo#�x\��<uNȕ�|�{��`�l�`�
�z��+9����3R�*�|�|Q.��~�f���^ﶼ;�N�����hV�*�&!˟��,�w���CTaZ���P����߶�v�$��Nhm1��pٟ/�;�-�<�\�7n�~�/���%���7�l�BzA�ÍN8�H:GB��?���H���D�a�����MmN{���2��mf�<f�:���,6���[x(�=��R���ݙ,����4��Л�!{��.�{?�7�h�ˮ���O�������H��Ǵ�!![���MMԾ�6��'s��>Կ������6V��g�O$.r�7Q�qx�-��0��`4��)^r>�x�-/hGբ��@}�Ć>�z��i�ʬc;E�
=u ��y�,e��h�E��V��u��D01�6ñ>ʄ%CS1~����Ã�>�=�i�d:6�%�4��O���R:#/z�w��Vΐ��)�T��漪 V�P��l��_�T ��,�Y׶�e��Ž͂�|�>Ҟ��:F�
��E'���Po�B�8}����dƑ��w̟f���޲=�=�g5�c؇KYtEW���Õ��PɈ|�<i�;�(<���G����ia{��ۨ�+Xs��eV�J��~���x)/����]�o\'�m���p��̚w��VҤ�r��9k%�C|y��6>#�ƣe8 ��Q&q�6<d�!�����:M�4 =z�C������g��C<�'��ߝ��A?�F+_hW"��Ӝh)"����d�P@"����^��r��vf��}��������*��}%���ȑ���A\9���'$�>>��#`;��?�@U�N'N��BJ�8�"���l�9w�����a��uX���Lk�b�hUBh�k��m~�8���a��~E�mU�0�#�crAzL��I�!�F/m��N��>���f�8
]�����h0`��i��8�����,
!|�ܪ�|�;�b����$����H�HVib+�g�k{|E���� ��~�.�ݫ�oۥkV����3�a7L@U�2��r7���9�S���w��(���D�)�gn���z�	�v~Z�Ǔ-�C~�^�vI*�M���8}��t1#���1u`���=@�C�뚟k��0��a��͋���{�z2GYQ��6p�>�Ӈ�^�������Gv1��P����M�|�g�0L�.��Z؎�kQ8��C����j���60���f��ןvg�{�o���w��D��ڝL������N�Q��|�_U�o��&T��s}TJ�/"�6�2N�����߯�y���?�~~����ҫ�Y!�-ֆ(d�pr0M�e[iAy�lTV�FQL��[u��c�Z��?/���Jc
�/��ۏ����g�{��sY���0�cU���n���:� �p�X�u#�1^��u�2��R����_�����G|�ٖ~j���1s��]��5u�K�&��+7I����y$L
��
��)gc�U�v���p��������v�r,{�0Qe�4q�)�����{��O����W_��W��{+�)�W�\b�&q�f����)c��~ _8��,e�>���-No�YHf^��+�	�m��X�F�؀i� �H��f3*a��֟Ǿ:˧}Ǐ>�¿y�[��g�n��X���V�3�[�v@������d�[��hȢO��쉷�#?�%��6\Q���p\���������]֌
x���w,X	A�x/_�r�J/�|rHvM.-������z��;��������t3}	9�!���� �'���b��;�k���ٳϿ��w)|O-�z�����n+*(�Ue'�P�^��ӂ����Y1k�s�O����_o�L���Z��p-0,����g/W����.9�Y]~z�������      5      x������ � �      7   �  x�-��n�0��gf����-�j)MA�T��7C�ib9NW��wLW����l��qp�;�o���Z�	1MG��F������蜍�\
/m�~S5�#�+�ɑ�Zxk���v���gk��2�?}�:ƅX�D��8\Q������7)�R���:�9���X�Ǝ�)x{���ʀ����m�֣*�w�ʇ��amJ����.2��A���������P-@R7��}��ޢ�ec�<7�M+(a��U�+�F�&�C$��o79T�:�u��1�u����~����{b/�K��=���2�L�U~	
��YF���|f��H$lZ�eA#��B�ES��ㄦ�jmOh�"�,ÙT���]������$�'a%�p�o�
-���x}�a����?4<Qd��?�2D�      9   k  x�Q�r�0<���ud7�7�T������ �$A��O�㴺{zZ9�k{{8:g2d�5�d߳�(�4�Q9������9�'{Q�qn<�������h��-m@3*b��V�F#��=�w>�_���A�R�[�B�E��b����T!ȁ}'�)���'�.��v#�(h'���  ��VϽ�P�Ըo����:2+�RC���W��%�~���T�}}�V�,כ-�܁9�W�m�m�����2�o��O�ʆ��d�iFG����92�5e�ϻ�~���w�Y��T�,��j�f����ȟ%�o����:	Z˒<�G�ʨ	\g�h �nE�_�6b#��j*�	���a9�$�$��)      @      x�31�427�L,NIL�LLR�\1z\\\ R�C      ;   �  x�u�KS�H���Cf����L���$�N%�l�݀��(����鶱��Ϸ�y-�%�L[n�Cl��t�<��z�&�W����O�~X�����1���O�K��n�4K)r����t�zh�ʎJ_����{=<,M�x}��)���Xߴ��?n�c7n���y�K��~�M�g3l��vqݬ�����Rj�Ћ�߲��=7ݺɻ�jUU����$�X�3Q%�)��2���p�h9WI}���/�3Ͷd���!ɕ䒺�v#I�$)�:�m���y�D�H�$���7�'�����C��0�ʖ�e��ɥs�E*w$�$��������$˭#I����W�tiU�?�nӬ�)�1VU��K�W}{�F2���Z��Y����ܒk�ʹ������ht�.���>����y�W�wW&5����Y���X���Y0eN�]��,c�1�X85+��)�4c.�5�X8�Bw�vO�<��<k����̎r��4�r?M�yGJr�ݲ<R�O��#p�1Řf�h�O���c�1Řf�:ܙ�c�6��E���6i�
��G!�
��F�:�
��G!� ��E¢`ѰT��pR,��%�",���z�Zz��-��UǪg5p���UŪf�z��9Rêeձ�Y�j��dU��Y���g5pZ	V%��U��4��ż�j�n��ph9tz�Fp(9Tj�yt��Cˡ��s��Cɡ�Ps8͞c4�S�v���V8�]���"9���H�{v��̋���R����Lܲ��ڴ�d;{X�}�a��B��0����mwK��n�{^�ϫ��v�'iw9<��A'8�*5�ӣ����
����)^P�Mazd`(X
���AARP4��Q8��`)8
�B������(h
�ݿ��f|���6e7�-p��K\W�5�i7�-p��+\W�5�i&7�-p��k\W�5��m���c��.��E���Q T��BA�p�0���E���Q ��DA��Q8Z�΃A���P�(�@A��P�(L��l�Sʿ�V/���)k`��8X<,'`��(X4,Ӽ?)����P�	��E�2='��baq�xX*A�"aQ�hPv�ny��|��4�./��{�o�wQq��M}�RuV�_%F��4W�nc�HS�� �*�������!@      ?     x����N�0���SxbD�+3��f�Q���"�]�x���$}��7�)���������`=�E]^ǃ��t8��l�L����:f[?B��`1y���7�'�Պ*=�#O�ؓ�<�O�ԏv�"�(.����軙�
]�<��Yzc��+w��72�v#%���#׼�\K)3k8��1�έ�&~���in�^�]rc��;��;�H�A��B��5��V�$�XBh!T@V��32�Wῇ�^�����G]�+�� gl(�      =   �	  x��Zˎ#�]WE��	��s���j#H��7�n�#�Z�����@~ 10�M���佤(�Q	�E����[���9��������/�����͗����+��?lw��wۯ��I��	2�'w�����nپ^�/��� ń R>���H<�<�@*{NF0O_P��ϋ�׫F��4kn�O�o����;P������v����Btx���h5E�q���`���`�kTa��g/@�^B�	ss�XxB����q�L��G�  �H ��)�d�r!\" �%���Dq�i���̫�(l�Z��FAbጝ��1K��X��������B(�>	M�Wq=�$ Q��& ���j�)��i�~�@�N+^30�V�� �ӟ�A���P�-l�Cb�4���(GP
�����<ǐ�P\������Q>�=�a@w�\c���62��)*H0	{ haT���Q�d�$)�Uw�,�k7��IU�(8\2G�6���������w��Vw:�P���)Bn��/��Ĥ��gF�3��y��8�Sj��r��ص�����a����tB:�wF@Xc�(���(Y0Q�� �� ��F|Y���j�~ǎ�%�XD4FdD,F�g��u?"���"��I�c0B�3�VDDI2�a4�@�gX��
�0�"����]D /��؀�:2A"���@�@l�Dh����I�|uFH�" H	��<�FL=�	����4�0�r�	�H�Q�ȴ��^��Q8&����Qi����b%Rמ�ɨ�1bJ
�P?)���o��W�7--#���vDw�Ϯ_��pB�_����������?��}���������|������������o�?�����_]1M�T)����I,S�e;fΉ%e"Z�D��=��H��d�"��Cm:7ԣ�k�) ǆ�g,�q�AS��X��thX�B�Fhނz�38[�`�
���y`~ #�+H�9�X5��-`%l橐�@G2��4�i@�9e��dp5�U��d2�d�,`��0-���*,��G0�T�%��; �Q�z �O� �m�D�Cc!:�)����Q���
�P+��@�9	I��3.�Q�-C����� ;a�?!�d�B���.[��+�"j^��	���(ƨ�XA�&�Z�=�� PeK��� �(�'E-V�LD5��,�z�)�8�]����f���^Dd�<.�<�*�6�1Z��I�h�X"A�`Gs	�:��3@�c�;�Q��T(��@�ے,�	0q)qD���M �
:\�fBE�L�P�$�F�+U�
�@"��e.(��:f9�T@�Y% ���%�~.uQ��N���0g����+[��H'��0*��K���)R��:�΋�����ܻ��h����h���e�$N���Xx���ڭ�(r�Bh�]�8�[��墱�]��P��med(����v3D1����q���>�n�io�����*��b�5��}y�^/v��q�GY'��'�a��a���5'�!��{cZ�'�g�}��/�{�r�����g���V���j�[����C�z���Ӧ���.�hJ;�\�8���Ե��b���i�}�\lڛ����.����b���VQzo,l�p(�D{>5��N:��u�É���b̉���LP�����*jl�49��c�n#U1'�_�RҔ�Rg�����C�|�<񙚖�LehV'2c��df�f�q4i��vZʜd������#��f}��)ӓ�p*PU[h����Ԭ�Z�JЋ��l(�p�SW��q<iQ���X�鞞����T�?@�j����������7�Ǟ7��/e�+xՉ�\W��:�9y㜏�f���숩"�>F!W�#ϛ�:H�oD�'�'��椎zFҤϩ�}�{�ږD��_�;����G@���VQ�{�9I�8#y���p�����U�������g��E���Wm���ڈA�$-�K ��e�ёu���é?%O�F�T����I`��+�*h0w�YW�����M�����n���c^�;ZVAKR�2	׾�<H�N��Jpz��7��w�>�T�.�T�C����́|��A/?�W:?SS_q
�k�~�*� �[ϫ����zyl=HZs7�m>_>/wk�7�Һ�Q�1���J��N���g�����ë�z}�~��WZS�j��j�_���1j�;RC-�Owۇ��櫛o��c�J�[tLW,5|y8�M��K�9����*rVy�|�x��h2����$�E���&*o6b�Y ���@Ԯ󰊎&3`��U�I��f����*V�D_���>��f� 53U�R�O���&{c�����F��+x5n�6��w�sD��\#P�I�f����瓘m������~Qf5^F��&�R=eZ��I���o�SZ�eR�)� ��`��L��X���Gie�zP��ҕ���,��5���I�*�*���"=���ɾ���v��99^S]���G�Y�V��+���>|2��������     